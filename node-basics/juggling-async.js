'use strict'
const http = require('http');
let buf = []
let index = 2;
function processGet(response) {
    response.setEncoding('utf8');
    response.on('data', (data) => { buf.push(data); });
    response.on('error', console.error)
    response.on('end', function() {
        const text = buf.reduce((total, item) => total.concat(item), '');
        console.log(text);
        buf = [];
        index += 1;
        if(index<process.argv.length) {
            http.get(process.argv[index], processGet).on('error', console.error);
        }
    })
}

http.get(process.argv[index], processGet).on('error', console.error);