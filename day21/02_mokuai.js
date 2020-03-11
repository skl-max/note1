// 将模块中的变量一个个的都写进来
// import {name,age} from "./02_module.js";

// console.log(name,age);

// 可以只引入模块中的部分属性
// import {readFile} from "fs";

// 可以以别名的方式全部引入
// import * as fs from "fs";


// 引入export default形式
// import a from "./02_module.js";
// console.log(a);


// 引入class
import {Stu} from "./02_module.js";
let s = new Stu("zhangsan");
console.log(s);
s.say();