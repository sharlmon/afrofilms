import zipfile
import os
import shutil

zips = [
    r"c:\Users\Admin\OneDrive\Desktop\work\afrofilms\afrofilms_web\public\FUNDER LOGOS -20260311T140745Z-3-001.zip",
    r"c:\Users\Admin\OneDrive\Desktop\work\afrofilms\afrofilms_web\public\FESTIVAL LAURELS -20260311T140710Z-3-001.zip"
]
out_dirs = [
    r"c:\Users\Admin\OneDrive\Desktop\work\afrofilms\afrofilms_web\public\uploads\new_clients\extracted",
    r"c:\Users\Admin\OneDrive\Desktop\work\afrofilms\afrofilms_web\public\uploads\new_festivals\extracted"
]

for z, out in zip(zips, out_dirs):
    os.makedirs(out, exist_ok=True)
    with zipfile.ZipFile(z, 'r') as zip_ref:
        for member in zip_ref.namelist():
            if member.endswith('/'):
                continue
            filename = os.path.basename(member)
            if not filename:
                continue
            
            source = zip_ref.open(member)
            target_path = os.path.join(out, filename)
            
            with open(target_path, "wb") as target:
                shutil.copyfileobj(source, target)
    print(f"Extracted {z} successfully to {out}")
