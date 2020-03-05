// 验证文件的完整和一致性
var crypto = require("crypto");
var fs = require('fs');

var data = fs.readFileSync("./day15.txt","utf-8");

var m = crypto.createHash("md5").update(data).digest("base64");

console.log(m);



