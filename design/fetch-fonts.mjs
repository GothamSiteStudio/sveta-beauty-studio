// Self-host the web fonts: fetch the Google Fonts CSS (with a modern UA so we
// get woff2), download every referenced woff2 into public/fonts, and rewrite
// the CSS to local paths. Removes all external font requests from the site.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '..', 'public', 'fonts');
fs.mkdirSync(outDir, { recursive: true });

const CSS_URL =
  'https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700' +
  '&family=Frank+Ruhl+Libre:wght@400;500;700;900' +
  '&family=Cormorant+Garamond:wght@500;600&display=swap';

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/120.0 Safari/537.36';

const res = await fetch(CSS_URL, { headers: { 'User-Agent': UA } });
let css = await res.text();

const urls = [...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/g)].map((m) => m[1]);
console.log('found', urls.length, 'woff2 files');

let i = 0;
const seen = new Map();
for (const url of urls) {
  if (seen.has(url)) continue;
  // derive a stable name from the family + a counter
  const famMatch = css.slice(0, css.indexOf(url)).match(/font-family:\s*'([^']+)'[^}]*$/);
  const fam = (famMatch ? famMatch[1] : 'font').replace(/\s+/g, '');
  const name = `${fam}-${String(++i).padStart(2, '0')}.woff2`;
  const bin = Buffer.from(await (await fetch(url, { headers: { 'User-Agent': UA } })).arrayBuffer());
  fs.writeFileSync(path.join(outDir, name), bin);
  seen.set(url, `/fonts/${name}`);
}

for (const [url, local] of seen) {
  css = css.split(url).join(local);
}

fs.writeFileSync(path.join(outDir, 'fonts.css'), css);
console.log('wrote public/fonts/fonts.css and', seen.size, 'woff2 files');
