{
  // 对象的解构赋值
  // 对象的解构赋值是按照属性名称来取值的,所以必须保证变量名与属性名相同
  let {a,b} = {b:2,a:1};
  console.log(a,b); // 1,2
}
{
  // 如果对象中没有对应的属性,则该变量取值为undefined
  let {a,b,c} = {c:10,a:20};
  console.log(a,b,c);
  // 如果有默认值,则取值默认值
  let {m=0,n=0} = {a:1,b:2};
  console.log(m,n);
}

{
  // let {a,b} = {a:1,b:2} ===> let {a:a,b:b} = {a:1,b:2};
  // 如果变量名与属性名不一致,还可以采用另一种方式取值(完整模式)
  // 此时,a,b为对象的属性,变量名为m和n
  let {a:m,b:n} = {a:10,b:20};
  console.log(m,n);
}
{
  // 完整模式的默认值
  let {a:m=1,b:n} = {b:20};
  console.log(m,n);
}


{
  let {a:[x],b:y} = {a:[1],b:[1,2,3]};
  console.log(x,y);
}
{
  let {a:{x}} = {a:{x:123}};
  console.log(x);
}
{
  // 先声明变量,然后再用对象解构赋值
  let a,b;
  ({a,b} = {a:1,b:2}); // 必须给整个表达式添加小括号,否则报错
  console.log(a,b);
  
}

{
  // 扩展符号的使用
  let {a,c,...b} = {b:2,c:3,a:1,d:4};
  console.log(a,c,b);
  
}

{
  let news = {
    date: "2010-1-1 19:00",
    title: "新闻联播",
    content: [
      {title: "访问外国",msg:"总理访问友邦"},
      {title: "天气情况",msg:"今天天气很好"}
    ]
  };
  let {title} = news;
  console.log(title);

  let {title:a,content,content:b,content:[c,d],content:[{title:e},{msg:f}]} = news;





  // 取 总理访问友邦
  // let {content:[{msg}]} = news;
  // console.log(msg);
  // 取 {title: "天气情况",msg:"今天天气很好"}
  // let {content:[ ,second]} = news;
  // console.log(second)
  // 取 [{..},{..}]
  // let {content} = news;
  // console.log(content);
}
