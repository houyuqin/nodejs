#!/usr/bin/node

console.log('dirname:',__dirname);
console.log('filename:',__filename);

// opterate data file
var file = __dirname = '/views/view.html';
console.log('filename:',file);

//windows data file 
file = __dirname + '\\views\\view.html';
console.log('file name in windows:',file);

const path = require('path');

file = path.join(__dirname,'views','view.html');
console.log('path join file name:',file);


/* var file = __dirname = '/data/db.xml';
console.log('filename:',file);

//windows data file 
file = __dirname + '\\data\\db.xml';
console.log('file name in windows:',file);

const path = require('path');

file = path.join(__dirname,'data','db.xml');
console.log('path join file name:',file);*/


