#!/usr/bin/node

const http = require('http'),
      log = console.log,
      qs = require('querystring');

var isLogin = false;

http.createServer((req,res)=>{
  log(`\n\n${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log();

  //req.url == '/login'
  //method === post
  //get username and password from request body
  //judge user is legal
  //is legal show home and set cookie logined
  //NOt legal show login
  if(req.url === '/login' && method === 'POST'){
    var user = '';
    req.on('data',(data)=>{
        return user += data;
    })
    req.on('end',()=>{
        var usr = qs.parse(user);
        if(usr.username === 'wangding' && usr.password === '123'){
          isLogin = true;
          res.setHeader('Set-cookie',`login=${isLogin}`);
          showHome();
          return;
        }else{
          showLogin(req,res);
          return;
        }
    })
  }

  //req.url == '/logout'
  //method === get
  //logout show login page
  if(req.url === '/logout' && req.method === 'GET'){
    isLogin = false;
    res.setHeader('Set-cookie',`login=${isLogin}`);
    showLogin();
    return;
  }

  //req.url === othor
  //judge have logined
  //id login show home page
  //not is legal show login

  if(typeof req.headers.cookie !== 'undefined'){
    log(req.headers.cookie);
    var data = req.headers.cookie.split('=');
    isLogin = data[1];
    if(isLogin === 'true'){
      showHome(req,res);
      return;
    }else{
      showLogin(req,res);
      return;
    }
  }else{
    showLogin(req,res);
    return;
  }

}).listen(8080);

function showHome(res){
  var html = ''
  + '<!DOCTYPE html>'
  + '<html lang="en">'
  + '<head>'
      + '<meta charset="UTF-8">'
      + '<title>home</title>'
  + '</head>'
  + '<body>'
      + '<h1>Welcome</h1>'
      + '<hr/>'
      + '<a href="/logout">logout</a>'
  + '</body>'
  + '</html>';
  res.end(html);
}

function showLogin(res){
  var html = ''
  + '<!DOCTYPE html>'
  + '<html lang="en">'
  + '<head>'
      + '<meta charset="UTF-8">'
      + '<title>login</title>'
  + '</head>'
  + '<body>'
      + '<from action="/login" method="POST">'
          + 'user name:<input type="text" name="username"/><br/>'
          + 'password:<input type="password" name="password"/><br/>'
          + '<input type="submit" value="login">'
      + '</from>'
  + '</body>'
  + '</html>';
  res.end(html);
}
