var Stu = require("./c.js");

var s = new Stu(1,"张三",12);
console.log(s);

s.age = 13;
s[Symbol("id")] = 10;
s[Symbol("sname")] = "李四";

console.log(s);

s.say();




// var b = require("./b.js");

// b.say();
// console.log(b);
// b[Symbol()] = 1;
// console.log(b);


// b.say();