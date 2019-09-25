#!/usr/bin/node

console.log('I am child process id %s',process.pid);

global.setInterval(function(){
  console.log('Time is d%',Date.now());
},2000);

global.setTimeout(function(){
  console.log('bye');
},16000);
