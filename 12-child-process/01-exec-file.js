#!/usr/bin/node

const cp = require('child_process');

cp.execFile('catabc',['-n','01-exec-file.js'],function(err,out,error){
  if(err){
    console.log(error.message);
    process.exit(1);
  }
  console.log(out);
  
});
