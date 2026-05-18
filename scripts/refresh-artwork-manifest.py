#!/usr/bin/env python3
"""Rewrite lib/story-artwork-manifest.generated.ts from the current contents
of public/story-artwork/generated/. Run this after adding or removing
artwork files there."""
import os

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
gen_dir = os.path.join(ROOT, "public", "story-artwork", "generated")
out_path = os.path.join(ROOT, "lib", "story-artwork-manifest.generated.ts")

ids = sorted(
    f[:-5] for f in os.listdir(gen_dir) if f.endswith(".webp")
)

with open(out_path, "w", encoding="utf-8") as f:
    f.write(
        "// AUTO-GENERATED — do not edit by hand.\n"
        "// Run scripts/refresh-artwork-manifest.py after adding/removing\n"
        "// files in /public/story-artwork/generated/ to refresh this list.\n\n"
        "export const generatedArtworkIds: ReadonlySet<string> = new Set([\n"
    )
    for sid in ids:
        f.write(f'  "{sid}",\n')
    f.write("]);\n")

print(f"wrote {out_path} with {len(ids)} entries")
