const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

// Function to create a zip file
function createZip(zipName, sourceDir, excludePattern = null) {
    return new Promise((resolve, reject) => {
        const output = fs.createWriteStream(path.join(__dirname, zipName));
        const archive = archiver('zip', {
            zlib: { level: 9 } // Maximum compression
        });

        output.on('close', function () {
            console.log(`✅ Created ${zipName}`);
            console.log(`📦 Size: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
            resolve();
        });

        archive.on('error', function (err) {
            reject(err);
        });

        archive.pipe(output);

        // Add directory contents with optional exclusion
        if (excludePattern) {
            archive.glob('**/*', {
                cwd: sourceDir,
                ignore: excludePattern
            });
        } else {
            archive.directory(sourceDir, false);
        }

        archive.finalize();
    });
}

async function createDeploymentPackages() {
    try {
        console.log('📦 Creating optimized deployment packages...');

        // 1. Code Package (Everything EXCEPT uploads)
        // This allows quick uploading of the application logic
        await createZip('afrofilms_code.zip', 'dist', 'uploads/**');

        // 2. Assets Package (ONLY uploads)
        // This separates the heavy media files
        // We need to zip the 'uploads' folder itself so when extracted it merges correctly
        // or typically we zip the contents of uploads into an 'uploads' folder in the zip

        // Actually, let's just zip the 'uploads' folder from within dist
        // But importantly, we want the zip to contain the 'uploads' folder at the root

        const outputAssets = fs.createWriteStream(path.join(__dirname, 'afrofilms_assets.zip'));
        const archiveAssets = archiver('zip', { zlib: { level: 9 } });

        outputAssets.on('close', function () {
            console.log(`✅ Created afrofilms_assets.zip`);
            console.log(`📦 Size: ${(archiveAssets.pointer() / 1024 / 1024).toFixed(2)} MB`);
        });

        archiveAssets.on('error', err => { throw err; });
        archiveAssets.pipe(outputAssets);

        // Append the uploads directory from dist/uploads to the zip, named 'uploads'
        archiveAssets.directory('dist/uploads/', 'uploads');

        archiveAssets.finalize();

    } catch (error) {
        console.error('❌ Error creating zip files:', error);
    }
}

createDeploymentPackages();
