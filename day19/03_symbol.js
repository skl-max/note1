{
  // symbol值得获取
  // Symbol不能使用new关键字,因为symbol是一个基本数据类型,不是构造函数
  // 也不能添加属性
  let s1 = Symbol();
  let s2 = Symbol();
  console.log(s1,s2);
  console.log(s1==s2); // false
}
{
  // 为了区分Symbol值,在创建Symbol时,可以传递一个字符串参数
  // 该参数仅作为一个描述
  let s1 = Symbol("s1");
  let s2 = Symbol("s2");
  let s3 = Symbol("s1");
  console.log(s1,s2,s3);
  console.log(s1==s3);
  // 如果参数不是字符串,则将其转换为对应字符串的格式(调用对应的toString方法)
  console.log(Symbol(1));
  console.log(Symbol({a:1}));
  console.log(Symbol([1,2]));
  console.log(Symbol(new Date()));
}

{
  // Symbol.for("")重新使用一个值
  let s1 = Symbol.for("s1");
  let s2 = Symbol.for("s1");
  console.log(s1,s2);
  console.log(s1==s2);
  /* 
  Symbol()和Symbol.for()的区别:
    Symbol()每次取到的值都是一个新的,且独一无二的值
    Symbol.for("")每次取值之前,会根据参数到内存中去查找,看看内存中是否有登记过该参数
      如果没有,则创建一个新的值,同时,将参数登记在内存中,方便下次搜索使用
      如果有,则不再获取新值,而是直接使用内存中的值
  */

}

{
  // 在对象的属性中使用Symbol
  let obj = {
    a: 1,
    "b":2,
    ["c"]:3,
    [Symbol()] : 1
  }
  console.log(obj);
  obj.a = 10;
  obj["b"] = 20;
  obj[Symbol()] = 100;
  console.log(obj);
  for(let key in obj){
    console.log(key);
  }
}

