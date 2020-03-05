// cookie的使用
var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();

app.listen(4000);

// 将所有的请求交给cookie-parser中间件处理
app.use(cookieParser("secret"));

app.get("/",function(req,res){
  // 设置cookie
  res.cookie("uname","jim");
  res.cookie("age",23);
  res.cookie("uname","张三");
  // // 设置有效期
  res.cookie("uname1","aaa",{expires: new Date(Date.now()+5000)});
  res.cookie("uname2","aaa",{maxAge: 5000});
  
  res.cookie("httponly","aaa",{httpOnly: true});

  res.cookie("path","aaa",{path: "/a"});

  res.cookie("signed1","aa",{signed:true});
  res.cookie("signed2","bb",{signed:true});

  res.send("<h1>//////请求</h1>");
})


app.get("/get",function(req,res){
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.send("<h1>获取cookie</h1>");
})

