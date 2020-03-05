var express = require("express");
var cookieParser = require("cookie-parser");
var sd = require("silly-datetime");

var app = express();

app.listen(4000);

app.use(cookieParser());

// 作业一,记录访问的次数和上次访问时间
app.get("/",function(req,res){
  var cookie = req.cookies;
  if(!cookie.count){
    // 如果cookie中没有count属性,说明以前没有设置(第一次访问)
    res.cookie("count",1);// 第一次访问
    var str = sd.format(new Date(),"YYYY年MM月DD日 HH时mm分ss秒");
    res.cookie("time",str);
    res.send("你已经访问了1次");
    return ;
  }
  // 不是第一次访问
  // 取cookie中的数据
  var count = req.cookies.count;
  count++;
  // 取上次访问的时间
  var last = req.cookies.time;
  var str = sd.format(new Date(),"YYYY年MM月DD日 HH时mm分ss秒");
  // 设置当前访问时的数据
  res.cookie("time",str);
  res.cookie("count",count);
  res.send("你已经访问了"+count+"次,上次访问时间是"+last);
});


// 作业二,记录历史搜索 localhost:4000/search?film=xxx
app.get("/search", function(req,res){
  // 取参数
  var film = req.query.film;
  // 取以前的搜索记录
  var history = req.cookies.film || "";
  history += " ";
  history += film;
  // 将当前的数据保存进cookie
  res.cookie("film",history);
  // 返回响应
  res.send("你的搜索记录: "+ history);
});



