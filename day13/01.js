// mongoose的使用
var mongoose = require("mongoose");

// 创建schema
var schema = mongoose.Schema;

// 定义数据格式
// key对应数据库中保存的属性,value为对应值得数据类型
var user = new schema({
  id: Number,
  name: String,
  isMarried: Boolean
},{collection: "mydata"});

// 定义模型 model
// 第一个参数表示集合名称的单数(对应集合名为users)
// 第二个参数表示Schema对象,也就是上面定义的数据格式
var userModel = mongoose.model("users",user);


// 利用模型,创建实例对象
var obj = {
  id: 1,
  name: "张三",
  isMarried: false
};
var u1 = new userModel(obj);


// 连接数据库
// 第一个参数为连接地址 mongodb://ip:27017/数据库名称
mongoose.connect("mongodb://localhost:27017/web",{useNewUrlParser:true,useUnifiedTopology:true});





// 将u1数据保存进数据库
/* userModel.insertMany([obj],function(err,result){
  console.log(err)
  console.log(result)
}) */
u1.save(function(err,doc){
  console.log(err);
  console.log(doc);
}) 
