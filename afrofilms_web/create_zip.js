import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

const distDir = path.resolve('dist');
const outputFile = path.resolve('deploy_compatible.zip');

// Use 7z or standard zip command if available via exec, 
// OR standard node 'archiver' package if I had it installed.
// But I can't install packages easily.
// 
// Plan B: Use standard Windows 'tar' command which is available on Windows 10+
// tar -a -c -f deploy_compatible.zip -C dist .
// BUT we need to exclude uploads.
// tar on windows supports --exclude

const command = `tar -a -v -c -f "deploy_compatible.zip" --exclude "uploads" -C "dist" *`;

console.log(`Executing: ${command}`);

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
    }
    console.log(`Stdout: ${stdout}`);
    console.log(`Successfully created ${outputFile}`);
});
