// 在ES6中,新增了一个块级作用域
// 一对大括号就是一个块级作用域
// function a(){
//   var sname = "aaa"; // 作用域--函数
// }
// console.log(sname); // sname未声明

// i是用var声明的,并且,不是在函数中声明
// for(var i=0;i<5;i++){
// }
// console.log(i);
// console.log(window.i);
console.log("======ES6======");
// ES6默认为严格模式
// *使用let声明变量:
// *变量必须先声明,然后才可以使用,不存在变量声明提升的情况
// *即使是在全局作用域下声明的变量,在window中也找不到该变量
let a=1;
console.log(a); // 1
console.log(window.a); // undefined

// *使用let声明的变量,使用范围只在块级作用域中
{
  var b = 1;
  let c = 2;
}
console.log(b);
// console.log(c); // c is not defined
for(let i=0;i<5;i++){
  console.log(i);
}
// console.log(i); // i is not defined==> i的作用域只在for中

// *使用let声明的变量只能声明一次
{
  let d = 10;
  console.log(d);
  // let d = 2;
  // var d = 2;
}


// const常量的声明
// *声明之后,值不可再改变
const A = 10;
// A = 1; // 常量不可改变

// const B; // 常量必须在声明的时候初始化
// B = 10;

// *如果常量是一个对象,则可以修改该对象中某个属性的值
// *但是常量的指向的地址不可以改变
// (不给STU重新赋值,可以随意修改STU中的任意属性)
const STU = {
  id:1,
  name: "zs"
};
console.log(STU);
STU.id = 10;
STU.name = "ls";
console.log(STU);


