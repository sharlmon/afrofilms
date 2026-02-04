const fs = require('fs');
const path = require('path');
const readline = require('readline');

const inputFile = 'zippy_wp_2026-02-04_22-30-23.sql';
const outputDir = 'content';

// Regex to capture VALUES (...), handling distinct rows
// Note: SQL dumps often have long lines with multiple values: INSERT INTO x VALUES (a,b,c), (d,e,f);
// We need to robustly parse these. Simple regex might fail on complex content.
// A better approach for huge files without a full parser:
// 1. Identify INSERT INTO \`wpqs_posts\`
// 2. Split the line by `),(` carefully (respecting quoted strings).

// Actually, since we want specific fields, we need to know the schema position of:
// ID, post_date, post_content, post_title, post_status, post_name, post_type
// Let's assume standard WP schema order or try to find it.
// Default WP 5.x+ structure usually:
// ID, post_author, post_date, post_date_gmt, post_content, post_title, post_excerpt, post_status, comment_status, ping_status, post_password, post_name, to_ping, pinged, post_modified, post_modified_gmt, post_content_filtered, post_parent, guid, menu_order, post_type, ...

// We'll use a simple state machine to parse the VALUES part if possible, or a regex if the dump is standard.
// Let's try to infer positions from a sample line first, but for now we'll imply standard positions or look for the CREATE TABLE statement to maps columns.
// Given the previous grep output wasn't super clear on column order, I'll add logic to parse the CREATE TABLE `wpqs_posts` first to map indices.

let tableSchema = {}; // { tableName: [col1, col2, ...] }
let currentTable = null;

const rl = readline.createInterface({
    input: fs.createReadStream(inputFile),
    crlfDelay: Infinity
});

// Helper to escape CSV-like parsing of SQL values
function parseSqlValues(line) {
    const values = [];
    let currentVal = '';
    let inQuote = false;
    let escape = false;
    
    // Naive parse: assumes we are inside the (...) of VALUES (...)
    // We need to split the full INSERT line into individual row strings first
    // This is tricky with huge lines. 
    // Alternative: regex matching `\((?:[^)(]+|'[^']*')+\)` is risky with nested parens in content.
    
    // Better strategy for this specific file:
    // 1. Find the `INSERT INTO \`wpqs_posts\` VALUES` part.
    // 2. The rest of the line is a list of tuples like (1, '...'), (2, '...');
    // 3. We can iterate through the string char by char to split these tuples.
    
    return values;
}

// Minimal CSV parser for a single SQL tuple string like "1, 'title', 'content'"
function parseRow(rowStr) {
    const cols = [];
    let current = '';
    let inQuote = false;
    let escape = false;
    
    for (let i = 0; i < rowStr.length; i++) {
        const char = rowStr[i];
        if (escape) {
             current += char;
             escape = false;
             continue;
        }
        if (char === '\\') {
            escape = true; // next chart literal
            // MySQL dumps escape things like \', \", \n, \r
            // We'll keep the backslash for now or handle it? 
            // In SQL 'It\'s' -> "It's". We should handle unescaping.
            // But let's just keep raw text and clean up later if needed, or simple unescape.
            // Actually, for content, we want to unescape: \n -> newline.
            continue;
        }
        if (char === "'" && !escape) {
            inQuote = !inQuote;
            continue;
        }
        if (char === ',' && !inQuote) {
            cols.push(current);
            current = '';
            continue;
        }
        current += char;
    }
    cols.push(current);
    return cols;
}

// Function to unescape SQL string content
function unescapeSql(str) {
    if (!str) return '';
    // SQL dumps usually wrap strings in '...'. valid strings inside are escaped \'
    // The parser above already removed outer quotes? No, the parser above accumulation includes content.
    // Wait, the parser loop above:
    // `current` accumulates chars. If we hit `,` outside quote, we push `current`.
    // We stripped the quote chars? No, `inQuote` toggles but we didn't add the quote char to `current`?
    // The loop logic:
    // If char is quote, we toggle inQuote. We do NOT add it to current?
    // If we want to capture correct content, we should usually NOT add the surrounding quotes.
    
    return str
        .replace(/\\n/g, '\n')
        .replace(/\\r/g, '\r')
        .replace(/\\'/g, "'")
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, '\\');
}

// Main logic
(async () => {
    let postsColumns = [];
    
    // Hardcoded fallback schema just in case we miss the CREATE stmt
    // Based on WP 6.x
    const defaultPostsCols = [
        'ID', 'post_author', 'post_date', 'post_date_gmt', 'post_content', 
        'post_title', 'post_excerpt', 'post_status', 'comment_status', 
        'ping_status', 'post_password', 'post_name', 'to_ping', 'pinged', 
        'post_modified', 'post_modified_gmt', 'post_content_filtered', 
        'post_parent', 'guid', 'menu_order', 'post_type', 'post_mime_type', 'comment_count'
    ];
    
    console.log('Starting extraction...');

    for await (const line of rl) {
        const trimmed = line.trim();
        
        // 1. Detect Schema
        if (trimmed.startsWith('CREATE TABLE `wpqs_posts`')) {
            console.log('Found wpqs_posts table definition. Parsing columns...');
            currentTable = 'wpqs_posts';
            postsColumns = []; 
            continue;
        }
        
        if (currentTable === 'wpqs_posts' && trimmed.startsWith('`')) {
            // inside create table, reading columns
            const colName = trimmed.split('`')[1];
            postsColumns.push(colName);
        }
        
        if (trimmed.startsWith(') ENGINE=') && currentTable === 'wpqs_posts') {
            console.log('Finished parsing wpqs_posts schema:', postsColumns);
            currentTable = null;
        }

        // 2. Parse Data
        if (trimmed.startsWith('INSERT INTO `wpqs_posts`')) {
            // Use logical columns or fallback
            const cols = postsColumns.length > 0 ? postsColumns : defaultPostsCols;
            
            const typeIdx = cols.indexOf('post_type');
            const statusIdx = cols.indexOf('post_status');
            const titleIdx = cols.indexOf('post_title');
            const contentIdx = cols.indexOf('post_content');
            const dateIdx = cols.indexOf('post_date');
            const slugIdx = cols.indexOf('post_name');
            const idIdx = cols.indexOf('ID');

            if (typeIdx === -1) {
                console.error('Could not find post_type column!');
                continue;
            }

            // The values part starts after "VALUES "
            const valuesPart = line.substring(line.indexOf('VALUES') + 6).trim();
            // Remove trailing semicolon
            const cleanValues = valuesPart.endsWith(';') ? valuesPart.slice(0, -1) : valuesPart;
            
            // Split by `),(` logic
            // We need a loop to handle the whole line character by character to safely split rows
            // because a content field might contain `),(`.
            
            let rowStr = '';
            let inQuote = false;
            let escape = false;
            let bracketLevel = 0; // 1 means inside (...)
            
            for (let i = 0; i < cleanValues.length; i++) {
                const char = cleanValues[i];
                
                if (escape) {
                    rowStr += char;
                    escape = false;
                    continue;
                }
                if (char === '\\') {
                    rowStr += char;
                    escape = true;
                    continue;
                }
                if (char === "'") {
                    inQuote = !inQuote;
                    rowStr += char;
                    continue;
                }
                
                if (!inQuote) {
                    if (char === '(') {
                        if (bracketLevel === 0) {
                            rowStr = ''; // start new row
                            bracketLevel++;
                            continue; // don't add opening paren to rowStr
                        }
                    }
                    if (char === ')') {
                        if (bracketLevel === 1) {
                            // End of a row
                            processPostRow(rowStr, cols, {typeIdx, statusIdx, titleIdx, contentIdx, dateIdx, slugIdx, idIdx});
                            bracketLevel = 0;
                            continue; // don't add closing paren
                        }
                    }
                    if (char === ',' && bracketLevel === 0) {
                        // comma between rows like ),(
                        continue;
                    }
                }
                
                if (bracketLevel > 0) {
                    rowStr += char;
                }
            }
        }
    }
})();

function processPostRow(rowStr, cols, indices) {
    const {typeIdx, statusIdx, titleIdx, contentIdx, dateIdx, slugIdx, idIdx} = indices;
    
    // Now we parse the CSV inside the row
    // rowStr is like: 1, 2, '2023...', 'content...', ...
    const rowValues = [];
    let current = '';
    let inQuote = false;
    let escape = false;
    
    for (let i = 0; i < rowStr.length; i++) {
         const char = rowStr[i];
         if (escape) {
             current += char;
             escape = false; 
             continue;
         }
         if (char === '\\') {
             escape = true;
             // Don't add backslash if it's escaping a quote, but do if it's content?
             // Standard SQL: \' is literal '. \\ is literal \.
             // We'll keep escape handling simple: just skip providing the backslash to `current` 
             // IF it is escaping a quote. If it's \n, we want \n.
             // Actually, let's just collect raw and clean later.
             current += char; 
             continue;
         }
         if (char === "'") {
             inQuote = !inQuote;
             // Don't add quotes to value
             continue;
         }
         if (char === ',' && !inQuote) {
             rowValues.push(current);
             current = '';
             continue;
         }
         current += char;
    }
    rowValues.push(current);
    
    // Clean up values (unescape)
    const cleanRow = rowValues.map(v => unescapeSql(v));
    
    const pType = cleanRow[typeIdx];
    const pStatus = cleanRow[statusIdx];
    
    if ((pType === 'post' || pType === 'page') && pStatus === 'publish') {
        const title = cleanRow[titleIdx];
        const content = cleanRow[contentIdx];
        const date = cleanRow[dateIdx];
        const slug = cleanRow[slugIdx] || `post-${cleanRow[idIdx]}`; // fallback slug
        const id = cleanRow[idIdx];

        if (!title) return; // skip empty
        
        const safeSlug = slug.replace(/[^a-z0-9-]/gi, '-').toLowerCase();
        const fileName = `${pType}-${id}-${safeSlug}.md`;
        const filePath = path.join(outputDir, fileName);
        
        const fileContent = `---
id: ${id}
title: "${title.replace(/"/g, '\\"')}"
date: ${date}
type: ${pType}
slug: ${slug}
---

${content}
`;
        fs.writeFileSync(filePath, fileContent);
        console.log(`Saved: ${fileName}`);
    }
}
