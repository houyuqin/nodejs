#!/usr/bin/node

process.on('SIGNAL',()=>{
  console.log('you process ctrl+c or kill -2');
  process.exit();
});

process.on('SINAL',()=>{
  console.log('you press ctrl+z');
  process.exit();
});

console.log('process id:',process.pid);

process.stdin.resume();

 
