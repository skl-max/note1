// 引入加密模块
var crypto = require("crypto");

// 模拟一个数据
var s = "123";

// 对数据加密
var res = crypto.createHash("md5").update(s).digest("base64");

console.log(res);

res = res.substr(4,7);
console.log(res);
res = crypto.createHash("md5").update(res).digest("base64");

console.log(res);