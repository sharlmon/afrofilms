const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip'); // Requires 'adm-zip' package, I might need to run `npm i adm-zip` first. Wait, maybe I can just use a builtin like zlib? No, let's just use `tar` from powershell but strip spaces, wait tar doesn't let you strip spaces unless you pipe. Let's just install adm-zip temporarily.
// Or wait, powershell has [System.IO.Compression.ZipFile]::ExtractToDirectory which might fail on spaces too. 
// What about `Rename-Item` on the bad folders? No, Windows can't even touch them.

// Let's just use adm-zip.
const zips = [
    "c:\\Users\\Admin\\OneDrive\\Desktop\\work\\afrofilms\\afrofilms_web\\public\\FUNDER LOGOS -20260311T140745Z-3-001.zip",
    "c:\\Users\\Admin\\OneDrive\\Desktop\\work\\afrofilms\\afrofilms_web\\public\\FESTIVAL LAURELS -20260311T140710Z-3-001.zip"
];
const outDirs = [
    "c:\\Users\\Admin\\OneDrive\\Desktop\\work\\afrofilms\\afrofilms_web\\public\\uploads\\new_clients\\extracted",
    "c:\\Users\\Admin\\OneDrive\\Desktop\\work\\afrofilms\\afrofilms_web\\public\\uploads\\new_festivals\\extracted"
];

zips.forEach((zipPath, i) => {
    const outDir = outDirs[i];
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }
    const zip = new AdmZip(zipPath);
    const zipEntries = zip.getEntries(); 

    zipEntries.forEach(function(zipEntry) {
        if (!zipEntry.isDirectory) {
            const fileName = zipEntry.name;
            const targetPath = path.join(outDir, fileName);
            fs.writeFileSync(targetPath, zipEntry.getData());
        }
    });
    console.log(`Extracted ${zipPath} to ${outDir}`);
});
