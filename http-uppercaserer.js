'use strict'
const http = require('http');
const fs = require('fs');
const map = require('through2-map');

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }
  res.writeHead(200, { 'content-type': 'text/plain' })
  req.pipe(map(function (chunk) {  
    return chunk.toString().toUpperCase();  
  })).pipe(res);
}).listen(process.argv[2]);