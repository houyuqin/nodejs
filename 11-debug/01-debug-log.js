#!/usr/bin/node

const util = require('util');
const log = util.debuglog('foo');

log('hello from bug [%s]',123);
