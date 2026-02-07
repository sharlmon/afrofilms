import fs from 'fs';
import path from 'path';

const contentDir = path.resolve('public/content');
const maliciousDomains = [
    'hdebonysex.com',
    'nakedblackbabes.pics',
    'pornhub.com', // Just in case
    'xvideos.com'  // Just in case
];

// Helper to check if string contains malicious content
const isMalicious = (str) => maliciousDomains.some(d => str.includes(d));

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
let cleanCount = 0;

files.forEach(file => {
    const filePath = path.join(contentDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    // 1. Remove specific malicious img tags
    // Matches <img ... src="...malicious..." ... />
    // We use a regex that matches the whole tag
    const imgRegex = /<img[^>]+src=["'][^"']*?(hdebonysex|nakedblackbabes)[^"']*?["'][^>]*>/gi;

    if (imgRegex.test(content)) {
        console.log(`Found malicious images in ${file}`);
        content = content.replace(imgRegex, '');
        modified = true;
    }

    // 2. Fallback: Scan lines for domains
    const lines = content.split('\n');
    const cleanLines = lines.filter(line => {
        if (isMalicious(line)) {
            console.log(`Removing contaminated line in ${file}: ${line.trim().substring(0, 50)}...`);
            modified = true;
            return false;
        }
        return true;
    });

    if (modified) {
        fs.writeFileSync(filePath, cleanLines.join('\n'));
        console.log(`Cleaned ${file}`);
        cleanCount++;
    }
});

console.log(`Sanitization complete. Cleaned ${cleanCount} files.`);
