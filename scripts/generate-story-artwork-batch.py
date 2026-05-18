#!/usr/bin/env python3
"""Batch-render story-artwork cards in the same style as
scripts/generate-story-artwork.mjs but using Pillow so it works in
environments where sharp / rsvg-convert / cwebp are unavailable.

Output: public/story-artwork/generated/<id>.webp
"""
from __future__ import annotations
import json, os, re, sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
OUT_DIR = os.path.join(ROOT, "public", "story-artwork", "generated")
STORIES_TS = os.path.join(ROOT, "lib", "stories.ts")

W, H = 960, 640

# --- font lookup -------------------------------------------------------------
SERIF_PATHS = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf",
    "/usr/share/fonts/truetype/liberation2/LiberationSerif-Bold.ttf",
]
SANS_PATHS = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf",
]
SANS_REG_PATHS = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
]


def first_existing(paths):
    for p in paths:
        if os.path.exists(p):
            return p
    raise RuntimeError(f"no font found in {paths}")


SERIF = first_existing(SERIF_PATHS)
SANS_BOLD = first_existing(SANS_PATHS)
SANS_REG = first_existing(SANS_REG_PATHS)


def font(path, size):
    return ImageFont.truetype(path, size=size)


# --- story loader (regex over lib/stories.ts) --------------------------------
def parse_stories():
    text = open(STORIES_TS, encoding="utf-8").read()
    out = []
    # Each story object literal — capture id, title.en, country.en, region.en?, category
    pat = re.compile(
        r'\{\s*id:\s*"([^"]+)",[\s\S]*?'
        r'title:\s*text\("([^"]+)"[^)]*\),[\s\S]*?'
        r'country:\s*text\("([^"]+)"[^)]*\),[\s\S]*?'
        r'(?:region:\s*text\("([^"]+)"[^)]*\),[\s\S]*?)?'
        r'category:\s*"([^"]+)"'
    )
    for m in pat.finditer(text):
        out.append(
            {
                "id": m.group(1),
                "title": m.group(2),
                "country": m.group(3),
                "region": m.group(4) or "",
                "category": m.group(5),
            }
        )
    return out


# --- layout helpers ----------------------------------------------------------
EYEBROW_MAP = {
    "myth": "ORIGIN",
    "folktale": "TALE",
    "epic": "EPIC",
    "creature": "CREATURE",
    "religion": "SACRED",
    "history": "HISTORY",
}


def wrap_title(text, max_chars):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        cand = (cur + " " + w).strip()
        if len(cand) > max_chars and cur:
            lines.append(cur)
            cur = w
        else:
            cur = cand
    if cur:
        lines.append(cur)
    return lines[:3]


def draw_text_letterspace(draw, xy, text, fnt, fill, letter_spacing, anchor="lt"):
    """Pillow has no letter-spacing on `text`; render glyph by glyph."""
    # Pre-measure to support center anchor
    glyphs = list(text)
    widths = []
    for g in glyphs:
        b = draw.textbbox((0, 0), g, font=fnt)
        widths.append(b[2] - b[0])
    total = sum(widths) + letter_spacing * (len(glyphs) - 1)
    x, y = xy
    if anchor.startswith("m"):
        x = x - total / 2
    elif anchor.startswith("r"):
        x = x - total
    for g, w in zip(glyphs, widths):
        draw.text((x, y), g, font=fnt, fill=fill)
        x += w + letter_spacing


def radial_circle(im, cx, cy, r, color, max_opacity):
    """Approximate a radial gradient (center → transparent) using a soft blur."""
    layer = Image.new("RGBA", im.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(*color, int(max_opacity * 255)))
    layer = layer.filter(ImageFilter.GaussianBlur(radius=r * 0.5))
    im.alpha_composite(layer)


def render_card(story, out_path):
    im = Image.new("RGBA", (W, H), (0x0C, 0x0B, 0x09, 255))

    # background radial accents on the right
    radial_circle(im, W - 180, H // 2 - 60, 220, (0x5B, 0x4A, 0x2B), 0.55)
    radial_circle(im, W - 80, H // 2 + 140, 190, (0x31, 0x29, 0x22), 0.7)

    draw = ImageDraw.Draw(im)
    # rounded border
    draw.rounded_rectangle((14, 14, W - 14, H - 14), radius=22, outline=(0x3A, 0x35, 0x2D), width=1)
    # outline circle accent + dot
    accent_cx, accent_cy = W - 200, H // 2 - 60
    draw.ellipse(
        (accent_cx - 38, accent_cy - 38, accent_cx + 38, accent_cy + 38),
        outline=(0xBB, 0x8A, 0x3A, int(0.55 * 255)),
        width=2,
    )
    draw.ellipse(
        (accent_cx - 6, accent_cy - 6, accent_cx + 6, accent_cy + 6),
        fill=(0xBB, 0x8A, 0x3A, int(0.7 * 255)),
    )

    # eyebrow
    eyebrow = EYEBROW_MAP.get(story["category"], story["category"].upper())
    eyebrow_font = font(SANS_BOLD, 20)
    draw_text_letterspace(
        draw, (W / 2, 92 - 14), eyebrow, eyebrow_font, (0xCF, 0x9B, 0x46, 255), 8, anchor="m"
    )

    # title (1-3 lines)
    title_lines = wrap_title(story["title"], 22)
    title_size = 56 if len(title_lines) > 1 else 64
    title_font = font(SERIF, title_size)
    line_h = title_size + 10
    title_start_y = H / 2 - ((len(title_lines) - 1) * line_h) / 2 - title_size / 2 - 6
    for i, line in enumerate(title_lines):
        y = title_start_y + i * line_h
        draw.text((W / 2, y), line, font=title_font, fill=(0xFA, 0xFA, 0xF6, 255), anchor="mm")

    # country · region
    cap = story["country"]
    if story["region"]:
        cap = f"{cap}  ·  {story['region']}"
    cap_font = font(SANS_REG, 22)
    draw.text((W / 2, H - 200), cap, font=cap_font, fill=(0xCF, 0xCD, 0xC6, 255), anchor="mm")

    # "MYTH ATLAS" footer
    footer_font = font(SANS_BOLD, 20)
    draw_text_letterspace(
        draw, (W / 2, H - 150 - 12), "MYTH ATLAS", footer_font, (0xCF, 0x9B, 0x46, 255), 10, anchor="m"
    )

    im.convert("RGB").save(out_path, format="WEBP", quality=90, method=6)


def main():
    force = "--all" in sys.argv
    only_ids = set()
    for arg in sys.argv[1:]:
        if not arg.startswith("--"):
            only_ids.add(arg)

    os.makedirs(OUT_DIR, exist_ok=True)
    stories = parse_stories()
    made = skipped = failed = 0
    fail_list = []
    for s in stories:
        if only_ids and s["id"] not in only_ids:
            continue
        out_path = os.path.join(OUT_DIR, f"{s['id']}.webp")
        if not force and os.path.exists(out_path):
            skipped += 1
            continue
        try:
            render_card(s, out_path)
            made += 1
            if made % 20 == 0:
                print(f"  ... {made} written")
        except Exception as e:
            failed += 1
            fail_list.append((s["id"], str(e)))
    print(f"Done. written={made}, skipped={skipped}, failed={failed}")
    for sid, msg in fail_list[:5]:
        print(f"  fail {sid}: {msg}")


if __name__ == "__main__":
    main()
