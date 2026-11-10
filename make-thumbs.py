#!/usr/bin/env python3
"""Make small cover thumbnails for mosaic.html.

The mosaic shows 400 covers at once. Full-size covers (664x1000) add up to
~57 MB to download and ~1 GB of memory once decoded, which makes phones blank
out parts of the screen. The wall uses these thumbnails instead and only
loads a full-size cover when you zoom in far enough to need it.

Usage (from the repo root, needs Pillow: pip install Pillow):
    python3 make-thumbs.py          # make thumbnails for new/changed covers
    python3 make-thumbs.py --all    # rebuild every thumbnail

Run it after adding new covers to images/, then commit images/thumbs/.
Covers without a thumbnail still work: the mosaic falls back to the full image.
"""
import glob
import os
import re
import sys

from PIL import Image

SRC_DIR = "images"
OUT_DIR = os.path.join("images", "thumbs")
WIDTH = 240          # px; sharp at the mosaic's default zoom on 3x phones
QUALITY = 82

def main():
    rebuild = "--all" in sys.argv
    os.makedirs(OUT_DIR, exist_ok=True)
    made = skipped = failed = 0
    for src in sorted(glob.glob(os.path.join(SRC_DIR, "Book_*.jpg"))):
        name = os.path.basename(src)
        if not re.fullmatch(r"Book_\d+\.jpg", name):
            continue
        out = os.path.join(OUT_DIR, name)
        if not rebuild and os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(src):
            skipped += 1
            continue
        try:
            with Image.open(src) as im:
                im = im.convert("RGB")
                h = round(im.height * WIDTH / im.width)
                im.resize((WIDTH, h), Image.LANCZOS).save(
                    out, "JPEG", quality=QUALITY, optimize=True, progressive=True)
            made += 1
        except Exception as e:  # keep going; the page falls back to the full image
            print(f"  ! {name}: {e}")
            failed += 1
    print(f"Thumbnails: {made} made, {skipped} up to date, {failed} failed -> {OUT_DIR}/")

if __name__ == "__main__":
    main()
