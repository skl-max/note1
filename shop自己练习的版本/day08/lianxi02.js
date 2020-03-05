// 商品的展示、新增、修改、删除
var express = require('express');
var mongoClient = require('mongodb').MongoClient;
// 创建ObjectId
var objectId = require('mongodb').ObjectID;
var app = express();

app.listen(4000);


app.set('view engine','ejs');

var url = 'mongodb://localhost:27017';
var option = {useNewUrlParser:true};

// 访问首页，以表格的方式显示所有商品信息
app.get('/',function(req,res){
  mongoClient.connect(url,option,function(err,client){
    console.log('/ :',err);
    var db = client.db('web').collection('shop');
    db.find({}).toArray(function(err,docs){
      console.log('docs: ',err);
        // 返回数据
        res.render('show',{docs:docs});
        client.close();
    });
  })
});

// /toAdd请求，跳转到新增商品的页面
app.get('/toAdd',function(req,res){
  res.render('add');
})

// /add，获取参数将参数保存进数据库
app.get('/add',function(req,res){
  // 获取参数
  var query = req.query;
  var pid = query.id;
  var pname = query.name;
  var price = parseInt(query.price);
  var count = parseInt(query.count);
  // 整合
  var data = {pid:pid,pname:pname,price:price,count:count};
  // 连接数据库
  mongoClient.connect(url,option,function(err,client){
    var coll = client.db('web').collection('shop');
    coll.insertOne(data,function(err,result){
      // 重新发送/请求
      console.log(result.result);
      res.redirect('/');
      client.close();
    });
  });
});

// /del请求，删除被点击的商品
app.get('/del',function(req,res){
  console.log(req.query);
  // 获取被点击商品的id(参数)
  var id = req.query.id;
  // ObjectId("5cee3e444aa5b611e03abf90")
  // 将字符串的id转换为ObjectId类型
  id = objectId(id);

  console.log(id);
  // 根据id删除
  mongoClient.connect(url,function(err,client){
    if(err){
      console.log(err);
      res.send('网络错误');
      return ;
    }
    var coll = client.db('web').collection('shop');
    // 删除
    coll.deleteOne({_id:id},function(err,result){
      if(err){
        console.log(err);
        res.send('删除失败');
        // 关闭连接
        client.close();
        return ;
      }
      console.log(result.result);
      res.redirect('/'); // 跳转到首页
      client.close();
    });
  });
})

// /update/id请求，根据id跳转到修改页面
app.get('/update/:id',function(req,res){
  // 获取参数id
  var id = req.params.id;
  // 将字符串的id转换为objectid
  id = objectId(id);
  // 连接数据库，根据id查找原数据
  mongoClient.connect(url,function(err,client){
    if(err){
      console.log(err);
      res.send('网络错误');
      return ;
    }
    // 根据id查找数据，并将原数据返回给修改的页面
    var coll = client.db('web').collection('shop');
    coll.findOne({_id:id},function(err,result){
      if(err){
        console.log(err);
        res.send('网络错误');
        client.close();
        return ;
      }
      console.log(result);
      // 将查询到的数据返回给修改页面
      res.render('update',{result:result});
    });
  });
});

// /update请求，获取参数，将数据库中的数据修改
app.get('/update',function(req,res){
  console.log(req.query);
  // 获取参数的值
  var id = req.query.id;
  id = objectId(id);
  var price = parseInt(req.query.price);
  var count = parseInt(req.query.count);
  // 将需要修改的数据整合
  var data = {price:price,count:count};
  // 连接数据库
  mongoClient.connect(url,function(err,client){
    if(err){
      console.log(err);
      res.send('网络错误');
      return ;
    }
    // 连接成功，修改数据
    var coll = client.db('web').collection('shop');
    coll.updateOne({_id:id},{$set:data},function(err,result){
      if(err){
        console.log(err);
        client.close();
        res.send('修改失败');
        return ;
      }
      res.redirect('/');
      client.close();
    });
  });
});

