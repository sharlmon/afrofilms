const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
// we can use JS to extract but standard node.js doesn't have a reliable built-in zip extractor.

// Let me use a PowerShell script that copies files out flat instead, since Add-Type System.IO.Compression.FileSystem allows inspecting entries.
