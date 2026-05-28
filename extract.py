import zipfile
import os

zip_path = 'latestafrofilm.zip'
extract_path = '.'

print("Extracting...")
with zipfile.ZipFile(zip_path, 'r') as zip_ref:
    zip_ref.extractall(extract_path)
print("Done.")
