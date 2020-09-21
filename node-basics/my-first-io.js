'use strict'
const fs = require('fs');
const textBuffer = fs.readFileSync(process.argv[2], 'utf8');
const lines = textBuffer.split('\n');
console.log(lines.length-1);
