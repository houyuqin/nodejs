#!/usr/bin/node

const http = require('https'),
      cherrio = require('cherrio'),
      log = console.log,
      print = require('util').debuglog('crawler'),
      addr = 'https://segmentfault.com/lives/free';

http.get(addr,function(res){
  var result = '';

  res.on('data',function(){
    result += data;
  });

  res.on('end',function(){
    print(result);

    //page parse
    var $ = cherrio.load(result);
    $('body').find('.card-body').each()function(){
      print($(this).html());
      var cName = $(this).find('.card-title>a').text(),
          cURL = $(this).find('.card-title>a').attr('href');
      cURL = 'http://segmentfault.com/lives/free';

      if(cName === '') return;

      log('课程名称:',cName);
      log('URL地址:',cURL.trim());
      log('');
    };
    
  });
});
