'use strict'
const http = require('http');
let buf = []
const index = 2;
function processGet(response) {
    response.setEncoding('utf8');
    response.on('data', (data) => { buf.push(data); });
    response.on('error', console.error)
    response.on('end', function() {
        const text = buf.reduce((total, item) => total.concat(item), '');
        console.log(text.length);
        console.log(text);
    })
}

http.get(process.argv[2], processGet).on('error', console.error);