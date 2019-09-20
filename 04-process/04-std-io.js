#!/usr/bin/node

const msg = ['name','email','qq','mobile'];

var usr = {},
    i=0;

console.log(msg[0]+':');

process.stdin.on('data',function(data){
  if(i<3){
    usr[msg[i]]=data.slice(0,data.length-1).toString('utf8');
    console.log(msg[++i]+':');
  }else{
    process.exit(1);
  }
});

process.stdin.on('end',function(){
  console.log(usr);
});

