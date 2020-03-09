// 数组的解构赋值
{
  // let a=1,b=2,c=3,d=4,e=5;
  // 按照一定的格式,将等号右边的值赋值给左边的变量
  // *左右两边的格式必须保持一致
  // *将右边数组中的每一个元素作为值,依次赋值给左边的每一个元素
  let [a,b,c,d,e] = [1,2,3,4,5];
  console.log(a,b,c,d,e);
}

{
  // 如果格式不一致,则可能会出现Undefined或者是报错
  let [a,b,c] = [1,,2];
  console.log(a,b,c);
  let [d,[e,f]] = [1,[2],3];
  console.log(d,e,f);
  let [[m,n],x,[y]] = [[1],2,[3]];
  // 可以先声明,然后再赋值
  [a,b,c] = [1,2,3];
  
  [a,[b,c],[m,,n]] = [[1],[2,3],[4,5,6]];
  console.log(a,b,c,m,n);
}

{
  // 互换两个变量的值
  let a = 1;
  let b = 2;
  // let c = a;
  // a = b;
  // b = c;
  [a,b] = [b,a];
  console.log(a,b);
}

// 解构赋值中的默认值
// 在解构赋值过程中,如果对应位置上有值,则取其值
// 如果没有,则取其默认值
// 如果没有设置默认值,则为Undefined
{
  let [a=0,b] = [];
  console.log(a,b); // 0, undefined
  let [c=1,d=2] = [10,20];
  console.log(c,d); // 10,20

  // 如果对应位置没有值,或值为Undefined,则依然取默认值
  // null会替换掉默认值
  let [e=1,f=2] = [null,undefined];
  console.log(e,f); // null 2
}

{
  // 封装一个方法,返回传递的2个数字的和差积商
  function result(a,b){
    return [a+b,a-b,a*b,a/b];
  }
  let [he,cha,ji,shang] = result(5,2);
}

{
  // 扩展符号 ...
  // 只能用在最后一个元素上
  let [a,b,...c] = [1,2,3,4,5,6];
  console.log(c);
  let arr = [1,2,3,4];
  console.log(...arr); // 将数组打开成一个个单独的元素
  // 相当于:
  console.log(1,2,3,4);
  //  ...[1,2,3] === >  1,2,3
  // ...c=>...[3,4,5,6] => 3,4,5,6
  // a,b,...c => a,b,...[3,4,5,6] => a,b,3,4,5,6

  // 展开符号还可以用在字符串上,用于将字符串拆分成一个个单独的字符
  arr = [..."hello world"]; // ["h","e","l","l","o"," ","w","o","r","l","d"]
  console.log(arr);

  // 展开符号还可以用于数组的复制
  let a1 = [4,6,8,3];
  let a2 = [...a1];
  a2[0] = 100;
  console.log("a2:" ,a2);
  console.log("a1:" ,a1);

}

{
  // 自己封装一个console.log方法
  function log(...m){
    console.log(...m);
  }
  log("abc","123");
  //  ...m = "abc","123"
  // ...["abc","123"] = "abc","123"

}
{
  // let [a,[b,...c],...d] = [1,[2],3];
  // console.log(a,b,c,d);
  let a= [1,2,3];
  let b= [11,22,33];
  //数组的合并
  // let c= a.concat(b);
  let c = [...a,...b];
  console.log(c);
  [a,...b] =c;
  console.log(a,b)
}

{
  function stu(id,name,age){
    console.log(id,name,age);
  }
  stu(1,"zs",13);
  //扩展符号调用
  var s = [2,"zs",13];
  stu(...s);
}
