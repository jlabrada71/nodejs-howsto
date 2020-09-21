'use strict'
const net = require('net');

function last( str, len) {
    return str.slice( str.length - len);
}

function getTime() {
    const d = new Date();
    const year = "0000" + d.getFullYear();
    const month = "00" + (d.getMonth() + 1);
    const day = "00" + d.getDate();
    const hours = "00" + d.getHours();
    const minutes = "00" + d.getMinutes();

    return last(year, 4) + '-' + last( month, 2 ) + '-' + last( day, 2 ) + ' ' + last(hours, 2) + ':' + last(minutes, 2) + '\n';

}

// console.log( getTime());

const server = net.createServer((socket) => {
    
    socket.write(getTime());
    socket.end();

});

server.listen(process.argv[2]);
