'use strict'
const fs = require('fs');
function printlinecount(err, data) {
        if(err) return console.log(err); 
	console.log(data.split('\n').length - 1);
}
fs.readFile(process.argv[2], 'utf8', printlinecount)
