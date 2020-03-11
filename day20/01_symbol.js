{
  // 对象中的symbol类型的属性是无法使用for...in, for...of循环遍历出来的
  // Object.keys()方法也获取不到
  let obj = {
    a:1,
    b:2,
    [Symbol()]:3
  };
  var keys = Object.keys(obj);
  console.log(keys);
  // Object.getOwnPropertyNames() 获取的也是普通的属性
  keys = Object.getOwnPropertyNames(obj);
  console.log(keys);

  // 获取Symbol属性
  // Object.getOwnPropertySymbols() 只能获取Symbols的属性
  keys = Object.getOwnPropertySymbols(obj);
  console.log(keys);
  console.log(obj[keys[0]]);
}

{
  // 属性名为Symbol的方法的调用
  let k = Symbol();
  let m = Symbol();
  let obj = {
    [k]: function(){console.log("Symbol k的方法被调用了");},
    [m](){console.log('m被调用');}
  }
  obj[k]();
  obj[m]();
}