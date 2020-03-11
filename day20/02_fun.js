{
  // 箭头函数
  let f = function(){}
  // 箭头函数的声明不需要使用function关键字,在小括号和大括号之间需要添加箭头=>
  let fn = ()=>{
    console.log("fn箭头函数");
  }
  fn();
}

{
  // 有参数的函数
  let fn = (a,b)=>{
    console.log(a+b);
  }
  fn(1,3);
  
  // 如果有且仅有一个参数,小括号可以省略
  let show = msg => {
    console.log(msg);
  }

  show("一个参数");

}


{
  // 有返回值的函数
  let add = (a,b)=>{
    console.log(111);
    return a+b;
  }
  let res = add(1,5);
  console.log(res);
  // 当函数体中有且仅有一句返回语句的时候,大括号和return可以省略

  let total = (a,b) => a+b;
  res = total(4,5);
  console.log(res);


}

{
  // 只有一个参数,只有一句返回语句函数体
  let fn = x => x*x;
  let res = fn(4);
  console.log(res);
}


{
  // 箭头函数中没有属于自己的this
  // function show(){
  //   console.log(this);
  //   console.log(this.name);
  // }
  // let obj = {
  //   id:1,name:"zhangsan"
  // };
  // show.call(obj);

  let obj = {
    name: "zhangsan",
    say: function(){
      let _this = this; // 提前保存this的指向,防止在使用过程中,this指向发生变化
      return function(){
        console.log(_this);
        console.log(_this.name);
      }
    }
  };
  obj.say()();

  console.log("箭头函数 的this指向问题");

  let obj2 = {
    name: "zhangsan",
    say: function(){
      // 返回的箭头函数是没有属于自己的this的,在里面使用的this,实际上是从上一级继承过来的
      return ()=>{
        console.log(this);
        console.log(this.name);
      }
    }
  }
  obj2.say()();
}

{
  // 因为箭头函数没有属于自己的this,所以无法像function可以作为构造函数来使用
  // function Stu(id,name){
  //   console.log(this);
  //   this.id = id;
  //   this.name = name;
  // }
  // let s1 = new Stu(1,"zs");
  // console.log(s1.id);
  // let s2 = new Stu(2,"ls");
  // console.log(s2.id);
  let Stu = (id,name)=>{
    console.log(this);
    this.id = id;
    this.name = name;
  }
  // let s1 = new Stu(1,"zs"); // 箭头函数不能作为构造函数来new对象


}


{
  // 函数参数的默认值
  function fn(a=0){
    console.log(a);
  }
  fn(4);

  let total = (a=0,b=0)=>a+b;
  let x = total(5);
  console.log(x);

}