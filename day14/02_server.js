// 创建服务器,通过浏览器发送请求,在后端使用mongoose操作数据库

var express = require("express");
var User = require("./02_mongoose.js");
var app = express();

app.listen(4000);

app.get("/",function(req,res){
  res.render("add.ejs");
})

app.get("/add",function(req,res){
  // 取参数
  var query = req.query; // {uname:"",age:""}
  // 创建对象
  var user = new User(query);
  // 保存数据
  user.save(function(err,doc){
    if(err){
      res.send("error");
      console.log(err);
      return ;
    }
    res.send(doc);
  })
  
})


