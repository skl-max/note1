var express = require("express");
var session = require("express-session");
var mongoClient = require("mongodb").MongoClient;
var app = express();

app.listen(4000);

app.use(session({
  secret:"login",
  resave: false,
  saveUninitialized: true
}));

app.get("/", function(req,res){
  // 访问/ 请求,
  // 1 已结登录了,跳转到欢迎页面
  // 2 未登录,跳转到登录页面
  var username = req.session.username; // 获取session中的username
  if(username){
    // 存在,说明已结登录了
    res.send("<h1>欢迎你,"+username+"</h1>");
    return ;
  }
  // 不存在,未登录
  res.render("login.ejs");
});


app.get("/login",function(req,res){
  // 取参数username的值
  var username = req.query.username;
  // 取password的值
  var password = req.query.password;
  // 查询条件
  var filter = {username:username,password:password};
  // 查询数据
  var client = new mongoClient("mongodb://localhost:27017/web",{useUnifiedTopology: true});
  client.connect(function(err){
    if(err){
      console.log(err);
      res.send("连接数据库失败");        
      return ;
    }
    var collection = client.db("web").collection("users");
    collection.find(filter).toArray(function(err,docs){
      if(err){
        console.log(err);
        client.close();
        res.send("网络错误,稍后再试");
        return ;
      }
      if(docs.length==0){
        res.send("用户名或密码错误");
      }else{
        // 登录成功,保存登录状态
        req.session.username = username;
        res.send("<h1>登录成功</h1>");
      }
      client.close();
    })
  })
});
