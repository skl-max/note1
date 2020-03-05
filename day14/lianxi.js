var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();

app.listen(4000);

app.use(cookieParser());

app.get("/",function(req,res){
  // 从req中获取cookie,判断有没有登录信息
  var cookies = req.cookies;
  var username = cookies.username;
  // 如果有username,说明已经登录,没有,则说明未登录
  var isLogin;
  if(username){
    isLogin = true;
  }else{
    isLogin = false;
  }
  res.render("lianxi.ejs",{isLogin:isLogin,username:username});
});

app.get("/login",function(req,res){
  var username = req.query.username;
  /* 假设用户名密码判断都正确 */
  // 保存登录状态
  res.cookie("username",username);
  res.send("<h3>登录成功</h3>点击<a href='/'>返回</a>");
});

