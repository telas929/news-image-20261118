import os
import shutil

def main() -> None:
    target_dir = os.environ.get("MAKEFUN_OUTPUT_DIR", "/output")
    os.makedirs(target_dir, exist_ok=True)

    src_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "entry.png")
    dest_path = os.path.join(target_dir, "entry.png")
    shutil.copyfile(src_path, dest_path)

    sz = os.path.getsize(dest_path)
    if sz == 0 or sz > 1048576:
        raise ValueError(f"Invalid output image size: {sz} bytes")

if __name__ == "__main__":
    main()
