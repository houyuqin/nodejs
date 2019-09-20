#!/usr/bin/node

const EventEmitter = require('event').EventEmitter;

var e = new EventEmitter();

global.setInterval(function(){
  e.emit('hello');
},1000);

global.setTimeout(function(){
  emit('bey');
},5000);

e.on('hello',function(){
  console.log('hello event emit!');
});
e.on('bye',function(){
  console.log(goodbye);
  process.exit();
});
