'use strict'
const mymodule = require('./mymodule.js') 

function processFiles(err, filelist) {
    if(err) return console.error(err);
    filelist.forEach((file) => console.log(file));

}

mymodule(process.argv[2], process.argv[3], processFiles );