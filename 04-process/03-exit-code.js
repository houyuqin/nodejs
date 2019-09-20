#!/usr/bin/node

const log = console.log,
      argv = process.argv[2],
      err = console.error;

if(typeof(arg) === 'undefined' || isNaN(Number(argv))) {
    err('命令行参数不正确');
      process.exit(1);

} else {
    log('退出码：', argv);
      process.exit(argv);

}
