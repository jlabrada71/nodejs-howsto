'use strict'
const fs = require('fs');
const path = require('path');

let ext = '';

function filterDir(err, filelist ) {
    if(err) return console.error(err);
    filelist.forEach((file) => {
        if(path.extname(file) === ext) {
          console.log(file);
        }
    });
}

ext = "." + process.argv[3];
fs.readdir(process.argv[2], filterDir );