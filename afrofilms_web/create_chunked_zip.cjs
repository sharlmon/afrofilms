const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const MAX_CHUNK_SIZE = 50 * 1024 * 1024; // 50MB per chunk

// Helper to create a zip file from a list of files
function createZipFromFiles(zipName, fileList, baseDir) {
    return new Promise((resolve, reject) => {
        const output = fs.createWriteStream(path.join(__dirname, zipName));
        const archive = archiver('zip', { zlib: { level: 9 } });

        output.on('close', function () {
            console.log(`✅ Created ${zipName}`);
            console.log(`📦 Size: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
            resolve();
        });

        archive.on('error', err => reject(err));
        archive.pipe(output);

        fileList.forEach(file => {
            // Add file to zip, preserving relative path from baseDir
            // We want the file to be inside 'uploads/' in the zip
            const relativePath = path.relative(baseDir, file);
            const zipPath = path.join('uploads', relativePath);
            archive.file(file, { name: zipPath });
        });

        archive.finalize();
    });
}

// Helper to recursively get all files
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

async function createChunkedZips() {
    try {
        console.log('📦 Creating chunked asset packages...');

        const uploadsDir = path.join(__dirname, 'dist', 'uploads');
        if (!fs.existsSync(uploadsDir)) {
            console.error('❌ dist/uploads directory not found!');
            return;
        }

        const allFiles = getAllFiles(uploadsDir);
        let currentChunkFiles = [];
        let currentChunkSize = 0;
        let chunkIndex = 1;

        for (const file of allFiles) {
            const stats = fs.statSync(file);
            const fileSize = stats.size;

            // If adding this file exceeds the limit and we have files in the chunk, verify
            if (currentChunkSize + fileSize > MAX_CHUNK_SIZE && currentChunkFiles.length > 0) {
                // Create zip for current chunk
                await createZipFromFiles(`afrofilms_assets_part${chunkIndex}.zip`, currentChunkFiles, uploadsDir);
                chunkIndex++;
                currentChunkFiles = [];
                currentChunkSize = 0;
            }

            currentChunkFiles.push(file);
            currentChunkSize += fileSize;
        }

        // Create the last chunk if any files remain
        if (currentChunkFiles.length > 0) {
            await createZipFromFiles(`afrofilms_assets_part${chunkIndex}.zip`, currentChunkFiles, uploadsDir);
        }

        console.log('✅ All asset chunks created successfully!');

    } catch (error) {
        console.error('❌ Error creating chunked zips:', error);
    }
}

createChunkedZips();
