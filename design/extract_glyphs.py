# Extract SVG path outlines for the Sveta logo from Playfair Display (variable).
# Pure vector -> the logo SVG has zero font dependency and renders identically
# everywhere. OFL permits embedding/converting outlines.
import json
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

SRC = "PlayfairDisplay.ttf"

def load_instance(wght):
    f = TTFont(SRC)
    instantiateVariableFont(f, {"wght": wght}, inplace=True)
    return f

def glyph_path_and_bounds(font, ch):
    glyphSet = font.getGlyphSet()
    cmap = font.getBestCmap()
    gname = cmap[ord(ch)]
    # y-flip so it's SVG-space (y down), baseline at y=0
    svgpen = SVGPathPen(glyphSet)
    tpen = TransformPen(svgpen, (1, 0, 0, -1, 0, 0))
    glyphSet[gname].draw(tpen)
    d = svgpen.getCommands()
    bp = BoundsPen(glyphSet)
    glyphSet[gname].draw(bp)
    (xmin, ymin, xmax, ymax) = bp.bounds if bp.bounds else (0, 0, 0, 0)
    adv = font["hmtx"][gname][0]
    return {
        "char": ch, "d": d, "advance": adv,
        # bounds in y-UP font space
        "xmin": xmin, "ymin": ymin, "xmax": xmax, "ymax": ymax,
    }

def string_paths(font, text, letter_spacing=0):
    """Combined single path for `text`, glyphs positioned by advance + spacing.
    Returned in SVG space (y down, baseline y=0). Also returns total width."""
    glyphSet = font.getGlyphSet()
    cmap = font.getBestCmap()
    svgpen = SVGPathPen(glyphSet)
    x = 0
    for ch in text:
        if ch == " ":
            # space advance
            gname = cmap.get(ord(" "))
            x += (font["hmtx"][gname][0] if gname else 250) + letter_spacing
            continue
        gname = cmap[ord(ch)]
        tpen = TransformPen(svgpen, (1, 0, 0, -1, x, 0))
        glyphSet[gname].draw(tpen)
        x += font["hmtx"][gname][0] + letter_spacing
    if text and text[-1] != " ":
        x -= letter_spacing  # no trailing gap
    return {"text": text, "d": svgpen.getCommands(), "width": x}

def metrics(font):
    upm = font["head"].unitsPerEm
    cap = getattr(font["OS/2"], "sCapHeight", None) or int(upm * 0.7)
    asc = font["OS/2"].sTypoAscender
    desc = font["OS/2"].sTypoDescender
    return {"upm": upm, "cap": cap, "ascender": asc, "descender": desc}

mono = load_instance(800)      # bold, high-contrast monogram
word = load_instance(560)      # elegant wordmark

out = {
    "units": metrics(mono),
    "monogram": {
        "S": glyph_path_and_bounds(mono, "S"),
        "P": glyph_path_and_bounds(mono, "P"),
    },
    "word_units": metrics(word),
    "wordmarks": {
        "studio": string_paths(word, "SVETA BEAUTY STUDIO", letter_spacing=120),
        "name": string_paths(word, "SVETA PASHAEV", letter_spacing=300),
    },
}
with open("glyphs.json", "w", encoding="utf-8") as fh:
    json.dump(out, fh, ensure_ascii=False)

u = out["units"]
print("upm", u["upm"], "cap", u["cap"])
for k, g in out["monogram"].items():
    print(k, "bbox", round(g["xmin"]), round(g["ymin"]), round(g["xmax"]), round(g["ymax"]), "adv", g["advance"])
for k, g in out["wordmarks"].items():
    print(k, "width", round(g["width"]))
print("wrote glyphs.json")
