import os
import zipfile

def create_deploy_zip():
    # Define the output zip file name
    zip_filename = 'DEPLOY_THIS_FIRST.zip'
    dist_folder = 'dist'
    
    # Create a ZipFile object
    with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
        # Walk through the dist directory
        for root, dirs, files in os.walk(dist_folder):
            # Skip the 'uploads' directory completely
            if 'uploads' in dirs:
                dirs.remove('uploads')
                
            for file in files:
                file_path = os.path.join(root, file)
                # Calculate the arcname (relative path inside the zip)
                arcname = os.path.relpath(file_path, start=dist_folder)
                # print(f"Adding {arcname}")
                zipf.write(file_path, arcname)

    print(f"✅ Successfully created {zip_filename}")
    print(f"📦 Size: {os.path.getsize(zip_filename) / 1024:.2f} KB")

if __name__ == "__main__":
    create_deploy_zip()
