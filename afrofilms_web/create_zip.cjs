const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const output = fs.createWriteStream(path.join(__dirname, 'afrofilms_deploy.zip'));
const archive = archiver('zip', {
    zlib: { level: 9 } // Maximum compression
});

output.on('close', function () {
    console.log('✅ Created afrofilms_deploy.zip');
    console.log('📦 Size: ' + (archive.pointer() / 1024 / 1024).toFixed(2) + ' MB');
});

archive.on('error', function (err) {
    throw err;
});

archive.pipe(output);

// Add entire dist folder contents
archive.directory('dist/', false);

archive.finalize();
