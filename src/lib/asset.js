// Resolve a public asset path against Vite's base URL, so it works both in dev
// (base "/") and on GitHub Pages (base "/sveta-beauty-studio/").
// Pass paths WITHOUT a leading slash, e.g. asset('logo/sveta-logo.svg').
export const asset = (p) => import.meta.env.BASE_URL + p.replace(/^\/+/, '')
