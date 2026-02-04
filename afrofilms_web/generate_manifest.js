import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, 'public/content');
const outputFile = path.join(__dirname, 'src/content_manifest.json');

// Ensure output dir exists
if (!fs.existsSync(path.dirname(outputFile))) {
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
const manifest = [];

files.forEach(file => {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(content);

    // We want to serve these files via fetch, so we need the public path
    const publicPath = `/content/${file}`;

    manifest.push({
        ...data,
        fileName: file,
        path: publicPath
    });
});

fs.writeFileSync(outputFile, JSON.stringify(manifest, null, 2));
console.log(`Manifest generated with ${manifest.length} items at ${outputFile}`);
