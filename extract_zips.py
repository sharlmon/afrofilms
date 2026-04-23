import zipfile
import os
import shutil

zips = ["c.zip", "w.zip", "o.zip"]
out_dir = "extracted_logos_safe"

if not os.path.exists(out_dir):
    os.makedirs(out_dir)

for z in zips:
    try:
        with zipfile.ZipFile(z, 'r') as zip_ref:
            for member in zip_ref.namelist():
                # Extract filename
                filename = os.path.basename(member)
                if not filename: # Skip directories
                    continue
                
                # Copy file to output directly, ignoring its folder structure in the zip
                # to avoid issues with space-padded folder names
                source = zip_ref.open(member)
                target_path = os.path.join(out_dir, f"{z.replace('.zip', '')}_{filename}")
                
                with open(target_path, "wb") as target:
                    shutil.copyfileobj(source, target)
        print(f"Extracted {z} successfully.")
    except Exception as e:
        print(f"Error with {z}: {e}")
