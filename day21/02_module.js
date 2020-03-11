  
// 一个一个的导出
// export let name = "张三";
// export let age = 23;

// 先将变量全部声明,然后一起导出
let name = "张三";
let age = 23;

// 不指定导出的属性名,而是已默认的形式
// 在其他js中引入时,就可以不限定名称
// export default {
//   name,
//   age
// }

// 导出一个类
export class Stu{
  constructor(name){
    this.name = name;
  }
  say(){
    console.log(this.name);
  }
}