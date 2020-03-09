{
  let fn = ()=>{
    console.log("fn")
  }
  fn();
}

{
  let fn = (a,b)=>{
    console.log(a+b)
  }
  fn(1,3);

}
{
  let add = (a,b)=>{
    return a+b;
  }
  let res = add(1,5);
  console.log(res);

  let total =(a,b)=>a+b;
  res=total(4,5);
  console.log(res)
}

{
  let fn = x=> x*x;
  let res =fn(4);
  console.log(res);
}

{
function show(){
  console.log(this.name);
}
// let obj = {
//   id:1,name:"zhangsan"
// };
// show.call(obj);
let obj = {
  name:"zhangsan",
  say:function(){
    let _this = this;
    return function(){
    console.log(_this);
    console.log(_this.name);
    }
  }
}
obj.say()();

console.log("箭头函数的this指向问题");

let obj2 = {
  name:"zhangsan",
  say: function(){
    return ()=>{
    console.log(this);
    console.log(this.name);
    }
  }
}
obj2.say()();
}
