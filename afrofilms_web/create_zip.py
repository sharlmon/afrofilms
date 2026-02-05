import zipfile
import os

def zip_dist_folder(output_filename):
    source_dir = 'dist'
    exclude_dir = 'uploads'
    
    with zipfile.ZipFile(output_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(source_dir):
            # Modify dirs in-place to skip the excluded directory
            if exclude_dir in dirs:
                dirs.remove(exclude_dir)
                
            for file in files:
                file_path = os.path.join(root, file)
                # Calculate the arcname (relative path inside the zip)
                # We want files inside 'dist' to be at the root of the zip
                # e.g. 'dist/index.html' -> 'index.html'
                arcname = os.path.relpath(file_path, source_dir)
                
                print(f"Adding {arcname}...")
                zipf.write(file_path, arcname)

if __name__ == '__main__':
    zip_dist_folder('deploy_compatible.zip')
    print("Created deploy_compatible.zip")
