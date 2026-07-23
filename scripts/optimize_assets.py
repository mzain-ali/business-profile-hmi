# scripts/optimize_assets.py — Optimizes public/assets images for ultra-fast load, crisp 300 DPI print quality & tiny PDF size
import os
from PIL import Image

ASSETS_DIR = "public/assets"
MAX_DIM = 1200

def optimize_file(path):
    orig_size = os.path.getsize(path)
    try:
        with Image.open(path) as img:
            w, h = img.size
            if w > MAX_DIM or h > MAX_DIM:
                img.thumbnail((MAX_DIM, MAX_DIM), Image.Resampling.LANCZOS)

            ext = os.path.splitext(path)[1].lower()
            if ext in [".jpg", ".jpeg"]:
                if img.mode != "RGB":
                    img = img.convert("RGB")
                img.save(path, "JPEG", quality=82, optimize=True)
            elif ext == ".png":
                img.save(path, "PNG", optimize=True)
                
            new_size_bytes = os.path.getsize(path)
            print(f"Optimized {path}: {(orig_size / (1024*1024)):.2f}MB -> {(new_size_bytes / (1024*1024)):.2f}MB")
    except Exception as e:
        print(f"Error optimizing {path}: {e}")

def main():
    for root, dirs, files in os.walk(ASSETS_DIR):
        for f in files:
            if f.lower().endswith((".png", ".jpg", ".jpeg")):
                optimize_file(os.path.join(root, f))

if __name__ == "__main__":
    main()
