const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const zipName = 'DEPLOY_THIS_FIRST.zip';
const output = fs.createWriteStream(path.join(__dirname, zipName));
const archive = archiver('zip', {
    zlib: { level: 9 } // Maximum compression
});

output.on('close', function () {
    console.log(`✅ Created ${zipName}`);
    console.log(`📦 Size: ${(archive.pointer() / 1024).toFixed(2)} KB`);
});

archive.on('error', function (err) {
    throw err;
});

archive.pipe(output);

// Add everything from dist EXCEPT uploads
archive.glob('**/*', {
    cwd: 'dist',
    ignore: ['uploads/**'] // exclude uploads folder content
});

archive.finalize();
