const sharp = require('./tools/node_modules/sharp');
const fs = require('fs');
const path = require('path');

const UPLOADS = path.join(__dirname, 'public', 'uploads');
const MAX_WIDTH = 1920; // max width for web
const JPEG_QUALITY = 80;
const SIZE_THRESHOLD = 500 * 1024; // only compress files > 500KB

async function compressImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

    const stat = fs.statSync(filePath);
    if (stat.size < SIZE_THRESHOLD) return;

    const sizeMB = (stat.size / 1024 / 1024).toFixed(2);
    const tmpPath = filePath + '.tmp';

    try {
        const metadata = await sharp(filePath).metadata();
        let pipeline = sharp(filePath);

        // Resize if wider than MAX_WIDTH
        if (metadata.width > MAX_WIDTH) {
            pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
        }

        if (ext === '.png') {
            pipeline = pipeline.png({ quality: JPEG_QUALITY, compressionLevel: 9 });
        } else {
            pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
        }

        await pipeline.toFile(tmpPath);

        const newStat = fs.statSync(tmpPath);
        const newSizeMB = (newStat.size / 1024 / 1024).toFixed(2);

        // Only keep if smaller
        if (newStat.size < stat.size) {
            fs.unlinkSync(filePath);
            fs.renameSync(tmpPath, filePath);
            console.log(`✅ ${path.basename(filePath)}: ${sizeMB}MB → ${newSizeMB}MB`);
        } else {
            fs.unlinkSync(tmpPath);
            console.log(`⏭️ ${path.basename(filePath)}: already optimized (${sizeMB}MB)`);
        }
    } catch (err) {
        if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
        console.log(`❌ ${path.basename(filePath)}: ${err.message}`);
    }
}

async function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await walkDir(fullPath);
        } else {
            await compressImage(fullPath);
        }
    }
}

async function main() {
    console.log('🔧 Compressing images > 500KB...\n');
    await walkDir(UPLOADS);
    console.log('\n✅ Done!');
}

main();
