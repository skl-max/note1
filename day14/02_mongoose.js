var mongoose = require("mongoose");

// 连接数据库
mongoose.connect("mongodb://localhost:27017/web",{useNewUrlParser:true,useUnifiedTopology:true});

// 创建Schema
var userSchema = new mongoose.Schema({
  uname: String,
  age: String,
  pwd: {type: String,default: "123"}
});

// 创建model
var User = mongoose.model("user",userSchema);

module.exports = User;


