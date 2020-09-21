'use strict'
const http = require('http');

function processGet(response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error)
    response.on('end', function() {
       // console.log('done');
    })
}

http.get(process.argv[2], processGet).on('error', console.error);