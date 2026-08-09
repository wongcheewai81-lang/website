"""Generate responsive image variants for oversized hero images.

Outputs <name>-340w.webp/.jpg etc. into images/ folder.
"""
from PIL import Image
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
IMG_DIR = ROOT / 'images'

# (source_jpg, [widths])
JOBS = [
    ('talk-eye-specialists.jpg', [340, 680, 1020]),
    ('clinic-consultation.jpg',  [280, 560, 840]),
    ('dr-wong-chee-wai.jpg',     [200, 400, 600]),
]

def resize(src, w):
    im = Image.open(src)
    if im.mode != 'RGB':
        im = im.convert('RGB')
    h = round(im.size[1] * w / im.size[0])
    return im.resize((w, h), Image.LANCZOS)

for fname, widths in JOBS:
    src = IMG_DIR / fname
    stem = src.stem
    for w in widths:
        out = resize(src, w)
        jpg_path = IMG_DIR / f'{stem}-{w}w.jpg'
        webp_path = IMG_DIR / f'{stem}-{w}w.webp'
        out.save(jpg_path, 'JPEG', quality=82, optimize=True, progressive=True)
        out.save(webp_path, 'WEBP', quality=80, method=6)
        print(f'{jpg_path.name}: {out.size[0]}x{out.size[1]} '
              f'({jpg_path.stat().st_size//1024} KiB jpg / '
              f'{webp_path.stat().st_size//1024} KiB webp)')
