#!/usr/bin/node

const http = require('http'),
      log = console.log;

var total = 1;//server requested times

http.createServer((req,res)=>{
  log(`\n\n${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();
  
  if(req.url === '/favicon.ico') return;
  log('I have required %d times',total++);

  var count=1;
  if(typeof req.headers.cookie !== 'undefined'){
    var data = req.headers.cookie.split('=');
    var count = Number(data[1])+1;
  }
  res.statusCode=200;
  res.setHeader('Set-cookie',`count=${count};max-age=4`);
  res.end(`you have reqired ${count} times`);
  
}).listen(8080); 
