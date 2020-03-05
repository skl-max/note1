// 测试封装的md5模块
var md5 = require("./myMD5");

var msg = md5.md5("123abc");

console.log(msg);

