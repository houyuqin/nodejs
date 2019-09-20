#!/usr/bin/node
const log = console.log,
      fs = require('fs');

var buf = fs.readFileSync('./nodejs-logo.bmp');

log('width:',buf.readInt32LE(0x12));
log('height:',buf.readInt32LE(0x16));
log('deepth:',buf.readUInt16LE(0x1c));


