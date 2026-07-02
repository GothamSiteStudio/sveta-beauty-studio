# Assemble the Sveta Beauty Studio logo as a pure-vector, self-contained SVG.
# Reads glyphs.json (outlines extracted from Playfair Display) and composes:
#   - interlocking SP monogram (S in front, P behind, thin knockout gap)
#   - broken-ring arcs + compass sparkles + beads + lotus (line accents)
#   - wordmark "SVETA BEAUTY STUDIO" + "SVETA PASHAEV"
# All gold on transparent. Also emits a square mark-only variant.
import json, math

G = json.load(open("glyphs.json", encoding="utf-8"))

# ---------- palette ----------
GOLD_STOPS = [
    (0.00, "#6f4f22"),
    (0.16, "#b98f3f"),
    (0.34, "#e7cd86"),
    (0.46, "#faf0c8"),
    (0.60, "#dcb35f"),
    (0.80, "#a87d38"),
    (1.00, "#6f4f22"),
]
GOLD_LINE = "#c8a44f"      # flat gold for thin accents
GOLD_TEXT = "#d8b968"      # wordmark

def grad(id_, x1, y1, x2, y2):
    stops = "".join(
        f'<stop offset="{o}" stop-color="{c}"/>' for o, c in GOLD_STOPS
    )
    return (f'<linearGradient id="{id_}" gradientUnits="userSpaceOnUse" '
            f'x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}">{stops}</linearGradient>')

# top-lit gold for wordmarks (maps to each glyph-path bbox -> predictable sheen)
GOLD_WORD = ('<linearGradient id="goldWord" gradientUnits="objectBoundingBox" '
             'x1="0" y1="0" x2="0" y2="1">'
             '<stop offset="0" stop-color="#eBD79a"/>'
             '<stop offset="0.5" stop-color="#d6b263"/>'
             '<stop offset="1" stop-color="#a17836"/></linearGradient>')

# ---------- geometry helpers ----------
def pt(cx, cy, r, deg):
    a = math.radians(deg)
    return (cx + r * math.cos(a), cy + r * math.sin(a))

def arc(cx, cy, r, a0, a1, sweep=1):
    x0, y0 = pt(cx, cy, r, a0)
    x1, y1 = pt(cx, cy, r, a1)
    large = 1 if abs(a1 - a0) > 180 else 0
    return f"M{x0:.2f} {y0:.2f} A{r} {r} 0 {large} {sweep} {x1:.2f} {y1:.2f}"

def sparkle(cx, cy, R, waist=0.13, rays=True):
    """4-point concave star (+ short diagonal rays) centered at cx,cy."""
    w = R * waist
    p = [(0, -R), (w, -w), (R, 0), (w, w), (0, R), (-w, w), (-R, 0), (-w, -w)]
    d = "M" + " L".join(f"{cx+x:.2f} {cy+y:.2f}" for x, y in p) + " Z"
    if rays:
        rr = R * 0.42
        rw = rr * 0.16
        for ang in (45, 135, 225, 315):
            dx, dy = math.cos(math.radians(ang)), math.sin(math.radians(ang))
            px, py = -dy, dx  # perpendicular
            tip = (cx + dx * rr, cy + dy * rr)
            b1 = (cx + px * rw, cy + py * rw)
            b2 = (cx - px * rw, cy - py * rw)
            d += (f" M{cx:.2f} {cy:.2f} L{b1[0]:.2f} {b1[1]:.2f} "
                  f"L{tip[0]:.2f} {tip[1]:.2f} L{b2[0]:.2f} {b2[1]:.2f} Z")
    return d

def bead(cx, cy, r):
    return f'<circle cx="{cx:.2f}" cy="{cy:.2f}" r="{r:.2f}"/>'

def beads_column(cx, y_start, dy, sizes):
    return "".join(bead(cx, y_start + i * dy, s) for i, s in enumerate(sizes))

def lotus(cx, cy, w, h):
    """Simple symmetric line lotus: center petal + 2 inner + 2 outer petals."""
    parts = []
    # center petal (pointed oval)
    parts.append(
        f"M{cx:.1f} {cy - h:.1f} C{cx + w*0.16:.1f} {cy - h*0.4:.1f} "
        f"{cx + w*0.16:.1f} {cy - h*0.1:.1f} {cx:.1f} {cy:.1f} "
        f"C{cx - w*0.16:.1f} {cy - h*0.1:.1f} {cx - w*0.16:.1f} {cy - h*0.4:.1f} "
        f"{cx:.1f} {cy - h:.1f} Z")
    # inner side petals
    for s in (-1, 1):
        parts.append(
            f"M{cx:.1f} {cy:.1f} C{cx + s*w*0.28:.1f} {cy - h*0.7:.1f} "
            f"{cx + s*w*0.52:.1f} {cy - h*0.5:.1f} {cx + s*w*0.5:.1f} {cy - h*0.16:.1f} "
            f"C{cx + s*w*0.46:.1f} {cy - h*0.02:.1f} {cx + s*w*0.2:.1f} {cy:.1f} {cx:.1f} {cy:.1f} Z")
    # outer side petals
    for s in (-1, 1):
        parts.append(
            f"M{cx:.1f} {cy:.1f} C{cx + s*w*0.6:.1f} {cy - h*0.44:.1f} "
            f"{cx + s*w*0.92:.1f} {cy - h*0.34:.1f} {cx + s*w*0.98:.1f} {cy - h*0.02:.1f} "
            f"C{cx + s*w:.1f} {cy + h*0.06:.1f} {cx + s*w*0.5:.1f} {cy + h*0.02:.1f} {cx:.1f} {cy:.1f} Z")
    return " ".join(parts)

# ---------- monogram ----------
def monogram_group(cx, baseline, scale, gap=34):
    S = G["monogram"]["S"]["d"]
    P = G["monogram"]["P"]["d"]
    # translate each glyph (font units) for a ~35% interlock, centered at 0
    dxS, dxP = -511, -182   # from bbox math: S front-left, P behind-right
    maskrect = '<rect x="-1200" y="-1200" width="2400" height="2400" fill="#fff"/>'
    return f'''
  <g transform="translate({cx},{baseline}) scale({scale})">
    <mask id="pknock" maskUnits="userSpaceOnUse" x="-1200" y="-1200" width="2400" height="2400">
      {maskrect}
      <g transform="translate({dxS},0)"><path d="{S}" fill="#000" stroke="#000" stroke-width="{gap}" stroke-linejoin="round"/></g>
    </mask>
    <g transform="translate({dxP},0)"><path d="{P}" fill="url(#goldMono)" mask="url(#pknock)"/></g>
    <g transform="translate({dxS},0)"><path d="{S}" fill="url(#goldMono)"/></g>
  </g>'''

# ---------- wordmark ----------
def wordmark(cx, baseline, target_w, key, fill):
    w = G["wordmarks"][key]["width"]
    d = G["wordmarks"][key]["d"]
    s = target_w / w
    x = cx - target_w / 2
    return f'<g transform="translate({x:.2f},{baseline}) scale({s:.5f})"><path d="{d}" fill="{fill}"/></g>'

# ---------- compose ----------
CX = 500
def build(full=True):
    W, H = (1000, 1180) if full else (1000, 1000)
    mono_baseline = 540 if full else 648
    mono_scale = 0.52 if full else 0.56
    ring_cy = 360 if full else 430
    ring_r = 250 if full else 300

    defs = grad("goldMono", -240, -770, 300, 60) + GOLD_WORD
    parts = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" '
             f'width="{W}" height="{H}" fill="none">',
             f"<defs>{defs}</defs>"]

    # accents behind monogram: broken ring arcs + end beads
    line_attrs = f'stroke="{GOLD_LINE}" stroke-width="3.2" fill="none" stroke-linecap="round"'
    a_top = arc(CX, ring_cy, ring_r, -158, -22, sweep=1)
    a_bot = arc(CX, ring_cy, ring_r, 22, 158, sweep=1)
    parts.append(f'<path d="{a_top}" {line_attrs}/>')
    parts.append(f'<path d="{a_bot}" {line_attrs}/>')
    for (ang) in (-22, 158):
        bx, by = pt(CX, ring_cy, ring_r, ang)
        parts.append(f'<g fill="{GOLD_LINE}">{bead(bx, by, 5.5)}</g>')

    # monogram
    parts.append(monogram_group(CX, mono_baseline, mono_scale))

    # top + bottom sparkles
    top_star_y = ring_cy - ring_r - (46 if full else 54)
    bot_star_y = ring_cy + ring_r + (46 if full else 54)
    parts.append(f'<g fill="url(#goldMono)"><path d="{sparkle(CX, top_star_y, 30)}"/></g>')
    parts.append(f'<g fill="{GOLD_LINE}"><path d="{sparkle(CX, bot_star_y, 26)}"/></g>')
    # graduated beads above top star and below bottom star
    parts.append(f'<g fill="{GOLD_LINE}">{beads_column(CX, top_star_y-44, -13, [2.0,3.0,4.2])}</g>')
    parts.append(f'<g fill="{GOLD_LINE}">{beads_column(CX, bot_star_y+30, 13, [4.2,3.0,2.0])}</g>')

    if full:
        # wordmark
        parts.append(wordmark(CX, 792, 620, "studio", "url(#goldWord)"))
        # divider line + center star flanking below studio
        dy = 828
        parts.append(f'<line x1="255" y1="{dy}" x2="452" y2="{dy}" stroke="{GOLD_LINE}" stroke-width="2"/>')
        parts.append(f'<line x1="548" y1="{dy}" x2="745" y2="{dy}" stroke="{GOLD_LINE}" stroke-width="2"/>')
        parts.append(f'<g fill="{GOLD_LINE}"><path d="{sparkle(CX, dy, 12, rays=False)}"/></g>')
        # secondary name
        parts.append(wordmark(CX, 878, 300, "name", GOLD_TEXT))
        # lotus + closing bead
        parts.append(f'<g fill="none" stroke="{GOLD_LINE}" stroke-width="2.4" stroke-linejoin="round">'
                     f'<path d="{lotus(CX, 946, 74, 40)}"/></g>')
        parts.append(f'<g fill="{GOLD_LINE}">{beads_column(CX, 992, 13, [3.4,2.4])}</g>')

    parts.append("</svg>")
    return "\n".join(parts)

open("logo.svg", "w", encoding="utf-8").write(build(full=True))
open("logo-mark.svg", "w", encoding="utf-8").write(build(full=False))
print("wrote logo.svg and logo-mark.svg")
