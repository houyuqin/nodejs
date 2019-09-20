#!/usr/bin/node

console.log('start....');

function loop(){
  console.log('I will loop forever!');
}

const timeID = setInterval(loop,500);
timeID.unref();//unref 退出父进程


setTimeout(()=>{
  console.log('Game Over!');
},5000);
