#!/usr/bin/node

const http = require('http'),
      addr = 'http://localhost:8080/',
      url = require('url');

var option = url.parse(addr);
option.method = 'POST';

var req = http.request(option,function(res){

  console.log(`HTTP/${res.httpVersion}${res.statusCode}${res.statusMessage}`);

  console.log(res.headers);
  console.log('');

  res.pipe(process.stdout);
});

req.end('hello world');
