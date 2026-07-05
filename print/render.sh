#!/usr/bin/env bash
# Render the print pieces to print-ready PDF (exact @page size incl. 3mm bleed)
# + PNG previews, using headless Chrome (renders Hebrew RTL + web fonts perfectly).
set -e
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
[ -f "$CHROME" ] || CHROME="/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROF="$(mktemp -d 2>/dev/null || echo /tmp/chrome-print-prof)"

pdf() {  # name  win_w  win_h  dsf
  local n="$1"
  "$CHROME" --headless=new --disable-gpu --no-sandbox --user-data-dir="$PROF" \
    --run-all-compositor-stages-before-draw --virtual-time-budget=6000 \
    --no-pdf-header-footer --force-color-profile=srgb \
    --print-to-pdf="$DIR/$n.pdf" "$DIR/$n.html" >/dev/null 2>&1
  "$CHROME" --headless=new --disable-gpu --no-sandbox --user-data-dir="$PROF" \
    --hide-scrollbars --force-device-scale-factor="$4" --window-size="$2,$3" \
    --virtual-time-budget=6000 --default-background-color=00000000 \
    --screenshot="$DIR/preview-$n.png" "$DIR/$n.html" >/dev/null 2>&1
  echo "  $n.pdf  ($(stat -c%s "$DIR/$n.pdf") b)  + preview-$n.png"
}

echo "Rendering print assets..."
pdf card-front 363 212 3
pdf card-back  363 212 3
pdf clinic-sign 1145 1610 2
echo "Done."
