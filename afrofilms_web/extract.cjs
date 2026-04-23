const AdmZip = require('adm-zip');
const fs = require('fs');
const path = require('path');

const zips = ['../c.zip', '../w.zip', '../o.zip'];
const outDir = '../extracted_logos_safe';

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

zips.forEach(z => {
    try {
        console.log(`Extracting ${z}...`);
        const zip = new AdmZip(z);
        const zipEntries = zip.getEntries();

        zipEntries.forEach(entry => {
            if (!entry.isDirectory) {
                const filename = path.basename(entry.entryName);
                if (filename && !filename.startsWith('._') && filename !== '.DS_Store') {
                    // Extract directly to outDir, stripping directories
                    const prefix = path.basename(z, '.zip');
                    const destPath = path.join(outDir, `${prefix}_${filename}`);
                    fs.writeFileSync(destPath, entry.getData());
                }
            }
        });
        console.log(`Successfully extracted ${z}`);
    } catch (e) {
        console.error(`Error extracting ${z}:`, e.message);
    }
});
