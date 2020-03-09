{
  let obj ={
    a:1,
    b:2,
    [Symbol()]:3
  };
  var keys = Object.keys(obj);
  console.log(keys);
  keys = Object.getOwnPropertyNames(obj);
  console.log(keys);

  keys = Object.getOwnPropertySymbols(obj);
  console.log(keys);
  console.log(obj[keys[0]]);
}

{
  let k = Symbol();
  let m = Symbol();
  let obj = {
    [k]: function(){console.log("Symbol k的方法被调用了");},
    [m](){
      console.log("m被调用了");
    }
  }
    obj[k]();
    obj[m]();
}

