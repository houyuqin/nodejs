#!/usr/bin/node

const http = require('http'),
      fs = require('fs'),
      qs = require('querystring'),
      log = console.log;

http.createServer((req,res)=>{
  log(`${req.method}${req.url}HTTP/${req.httpVersion}`);
  log(req.headers);
  log();

  
  var fl = '';

  req.setEncoding('binary');

  req.on('data',(data)=>{
    fl += data;
  });
  
  req.on('end',()=>{

    //parse fl
    var buf = fl.split('\r\n')[4];
    var files = fl.split('\r\n')[1].split(';');
    var fileName = qs.parse(files[2].trim())['filename'];
    fileName = fileName.slice(1, fileName.length-1);//get file name
    log(fileName);
   

    //get file data
    var filedata = fl.split("\r\n")[4]; 
    log(filedata);

    //save file
    fs.writeFileSync(fileName,filedata,{'encoding':'binary'});

  });

 res.end('OK');
}).listen(8080);


