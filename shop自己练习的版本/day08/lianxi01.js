var express = require('express');
var mongoClient = require('mongodb').MongoClient;
var app = express();

app.listen(4000);

var url = 'mongodb://localhost:27017';

app.set('view engine','ejs');

app.get('/',function(req,res){
  res.render('login');
});

app.get('/login',function(req,res){
  // 获取参数
  var query = req.query; // {username:'xxx',password:'xxx'}
  var username = query.username;
  var password = query.password;
  // 将参数整合成查询条件
  var filter = {username:username,password:password};
  // 连接数据库，查询数据是否存在
  mongoClient.connect(url,{useNewUrlParser:true},function(err,client){
    if(err){
      console.log(err);
      res.send('网络错误，稍后再试');
      return ;
    }
    // 获取集合
    var coll = client.db('web').collection('stu');
    // 使用集合来查询数据
    coll.find(filter).toArray(function(err,docs){
      if(err){
        console.log(err);
        res.send('网络波动，稍后再试');
        return ;
      }
      // 登陆成功，说明查询到了数据，数组的长度不为0
      // 没有成功，说明没有查到数据，但是数组依然存在，只不过，是一个空数组，长度为0
      if(docs.length>0){
        res.send('登陆成功');
      }else{
        res.send('用户名或密码错误，登陆失败');
      }
      client.close();
    });
  })
})

// 点击注册按钮，跳转到注册页面
app.get('/toRegist',function(req,res){
  res.render('regist');
});

// 处理注册请求，将用户输入数据进行判断，
// 若用户名不存在，则将数据保存进数据库，
// 并提示用户，注册成功
app.get('/regist',function(req,res){
  // 获取参数
  var query = req.query;
  var username = query.username;
  var password = query.password;
  // 将用户数据整合
  var data = {username:username,password:password};
  // 连接数据库，保存数据
  mongoClient.connect(url,{useNewUrlParser:true},function(err,client){
    if(err){
      console.log(err);
      res.send('网络错误，稍后再试');
      return ;
    }
    var coll = client.db('web').collection('stu');
    // 先检查数据库中是否包含该用户名
    coll.find({username:username}).toArray(function(err,docs){
      if(err){
        console.log(err);
        res.send('网络错误，稍后再试');
        client.close();// 已经连接成功，但是对集合操作时出错，
        // 导致代码提前结束，连接提前关闭
        return ;
      }
      // 正常查取，检查docs中是否有数据
      // 有元素，表示查到了数据
      // 空数组，表示没有查到数据
      if(docs.length!=0){
        // 有数据，用户名已存在，不能注册
        res.send('用户名已存在，注册失败');
      }else{
        // 可以注册，将数据插入数据库
        coll.insertOne(data,function(err,result){
          if(err){
            console.log(err);
            res.send('网络错误，稍后再试');
            client.close();
            return ;
          }
          res.send('注册成功');
        });
      }
      // 关闭连接
      client.close();
    });
  })
});


