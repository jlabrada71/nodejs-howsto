'use strict'
const fs = require('fs');
const path = require('path');

module.exports = function ( dir, extension, callback) { 

    let ext = "." + extension;

    fs.readdir(dir, function (err, filelist ) {
        if(err) return callback(err);
        const result = [];
        filelist.forEach((file) => {
            if(path.extname(file) === ext) {
              result.push(file);
            }
        });
        callback(null, result);
    } );
}  



