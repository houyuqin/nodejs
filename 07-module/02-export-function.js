#!/usr/bin/node


function circle(radius){
  function area(){
    return Math.PI*radius*radius;
  }

  function ciecleference(){
    return 2*Math.PI*radius;
  }

  return{
    area:area,
    ciecleference:ciecleference;
  }
}

console.log(momdule);
module.exports = circle;
