#!/usr/bin/node

function TBomb(){
  this.message = 'bomb';
}

TBomb.prototype.explode = function(){
  console.log(this.message);
};

var b = new TBomb();

var timer = setTimeout(b.explode.bind(b),2000);

clearTimeout(timer);
