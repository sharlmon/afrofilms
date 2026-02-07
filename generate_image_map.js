const fs = require('fs');
const readline = require('readline');

const inputFile = 'zippy_wp_2026-02-04_22-30-23.sql';
const outputFile = 'afrofilms_web/public/image_map.json';

const map = {};

const rl = readline.createInterface({
    input: fs.createReadStream(inputFile),
    crlfDelay: Infinity
});

// We look for patterns like: (1234, 5502, '_wp_attached_file', '2017/05/img.jpg')
// The order in wp_postmeta is: meta_id, post_id, meta_key, meta_value
// BUT sometimes schema varies.
// Let's assume standard order.

console.log('Scanning SQL for image paths...');

rl.on('line', (line) => {
    if (line.includes('_wp_attached_file')) {
        // Naive split by ),( to get rows
        // This is fragile but fast.
        const parts = line.split('),(');

        parts.forEach(part => {
            if (part.includes('_wp_attached_file')) {
                // expecting: ID, POST_ID, '_wp_attached_file', 'PATH'
                // Remove leading ( or 'INSERT...' junk
                // We just want to find: post_id, 'KEY', 'VALUE'

                // Let's regex match the tuple
                // digits, digits, '_wp_attached_file', 'string'
                const match = part.match(/(\d+),\s*'_wp_attached_file',\s*'([^']+)'/);
                if (match) {
                    const postId = match[1];
                    const filePath = match[2];
                    map[postId] = filePath;
                }
            }
        });
    }
});

rl.on('close', () => {
    fs.writeFileSync(outputFile, JSON.stringify(map, null, 2));
    console.log(`Generated map with ${Object.keys(map).length} entries.`);
});
