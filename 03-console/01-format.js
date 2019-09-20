#! /usr/bin/node

const log = console.log;

var usr = {
  name :'houyuqin',
  age : 21,
  qq :'1738519809'
};

//const log = console.log;

console.log('name:%s',usr.name);
console.log('age:%d',usr.age);
console.log('JSON:%j',usr);

console.log('qq:%s',usr.qq);
console.log('qq:%j',usr.qq);

/*
log('qq:',usr.qq);
log('qq:'+usr.qq);
log('qq:$(usr.qq)');*/

console.error('Error!something wrong!')
