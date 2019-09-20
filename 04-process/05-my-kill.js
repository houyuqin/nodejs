#!/usr/bin/node

const signal = process.argv[2],
      pid = process.argv[3];


if(process.argv.length != 4 || isNaN(Number(pid))){
  console.log('您输入的参数有误！');
  process.exit(1);
}else{
  process.kill(pid,signal);
}
