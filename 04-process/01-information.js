#!/usr/bin/node

const log = console.log;

log('CPU:',process.arch);
log('OS',process.platform);
log('PID',process.pid);
log('execPath',process.execPath);
log('version',process.version);
log('uid',process.getuid());
log('gid',process.getgid());
log('cwd:%s\n',process.cwd());
log('rss:',process.memoryUsage().rss);
log('headTotal',process.memoryUsage().heapTotal);
log('headUsed',process.memoryUsage().heapUsed);
log('env',process.env);
log('hostname',process.env.HOSTNAME);

process.stdin.on('data',function(data){
  log(data);
});
