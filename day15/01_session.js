var express = require("express");
var session = require("express-session");
var app = express();


app.listen(4000);

app.use(session({
  secret: "abc123",
  resave: false,
  saveUninitialized: true
}));


app.get("/",function(req,res){
  res.send("<h1>session</h1>");
});

app.get("/setSession",function(req,res){
  req.session.username = "张三";
  res.send("<h1>设置session</h1>");
});

app.get("/getSession",function(req,res){
  var username = req.session.username;
  console.log(req.session);
  console.log(username);
  res.send("<h1>获取session</h1>");
})