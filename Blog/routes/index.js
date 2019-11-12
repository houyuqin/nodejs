var express = require('express');
var debug = require('debug')('Blog:server');
var router = express.Router();
var data = require('../data.json');

/* GET home page. */
router.get('/login', function(req, res) {
  if(typeof req.session.user === 'undefined'){
    res.render('login',{user:req.session.user});
  }else{
    res.render('list',{data:data.chapterList})
  }

});

router.post('/list', function(req, res) {
    var user= {
      'username': req.body.username, 
      'password': req.body.password
    };
    for(var i=0;i<data.users.length;i++){
      if(data.users[i].username === user.username && data.users[i].password === user.password) {
        //res.render('list',{user:req.session.user});
        res.render('list',{data:data.chapterList})
      }else{
        console.log(req.body.password);
        //res.setHeader('Content-Type':'text/plain');
        res.send('用户名或密码错误！');
        res.render('login',{user:req.session.user});
      }
    }
});


module.exports = router;
