// 使用nodejs连接mongodb数据库
// 1. 引入mongodb模块
var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';// 连接地址

// 2. 连接数据库
mongoClient.connect(url,function(err,client){
  if(err){
    console.log(err);
    return ;
  }
  // 没有出错，连接成功,client就是连接的对象
  // 3. 通过连接对象获取数据库名称
  // 参数就是数据库的名称
  var db = client.db('web');
  // 4. 通过db获取集合名称
  // 参数为集合的名称
  var coll = db.collection('stu');

  // 插入数据
  coll.insert({id:10001,name:'jim'},function(err,result){
    if(err){
      console.log(err);
      return ;
    }
    console.log(result);
    client.close();
  });


  // 5. 查询集合中的数据
  /* coll.find().toArray(function(err,docs){
    if(err){
      console.log(err);
      return ;
    }
    // 打印数据
    console.log(docs);
    // 操作数据库完毕，一定要关闭连接
    client.close();
  }); */

  
});













