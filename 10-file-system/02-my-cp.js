#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2],
      dst = process.argv[3];

//src.pip(dst)
//src = fs.createreadstreeam
//dst = fs.createwritestreaam

fs.createReadStream(src).pipe(fs.createWriteStream(dst));

