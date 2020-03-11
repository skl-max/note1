// 数组的扩展
{
  // 创建数组
  let arr1 = [1,2,3,4];
  let arr2 = [];
  let arr3 = new Array(5);
  console.log(arr3);
  let arr4 = new Array(1,2,3,4,5,6);
  console.log(arr4);
  // 创建只有一个元素的数组
  // Array.of()方法弥补构造方式创建一个元素数组的弊端
  let arr5 = Array.of(5);
  console.log(arr5);

}

{
  // 将类数组对象转换为真正的数组
  // Array.from()
  // 如果参数就是一个数组,则返回一个一模一样的数组
  let divs = document.querySelectorAll("div");
  console.log(typeof divs);
  let ds = Array.from(divs);
  console.log(ds);
  let arr = Array.from([1,2,3,4]);
  console.log(arr);
}

{
  // find(),findIndex()
  let arr = [5,6,3,6,4];
  let result = arr.findIndex(function(val,idx){
    console.log(val,idx);
    // find方法用于查找数组中的某个元素,并返回
    // 找6这个元素
    // if(val==6){
    //   return val;
    // }
    return val==6;
  });
  console.log(result);
}

{
  // 使用find方法查找数组中的数据
  let arr = [0,-0,+0,null,undefined,NaN,"",false];
  let x = arr.find(val=>{
    console.log(val);
    // Object.is()用于判断两个值是否一样
    return Object.is(val,-0);
  });
  console.log(x);

}

{
  // fill() 填充数组
  let arr = new Array(5);
  console.log(arr); // [empty*5]
  // 向数组中填充字符串a
  arr.fill("a"); 
  console.log(arr); // ["a"*5]
  arr.fill("b");
  console.log(arr); // ["b"*5]
  // 第二个参数表示起始位置
  arr.fill("c",1);
  console.log(arr); // ["b",cccc];
  // 第三个参数表示结束的位置
  arr.fill("d",1,3);
  console.log(arr); // [b,d,d,c,c]
}