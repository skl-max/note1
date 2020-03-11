{
  // Map数据类型
  // 创建一个Map集合
  let map = new Map();
  console.log(map);
  // 向map中添加数据
  map.set("语文",80);
  map.set("数学",90);
  console.log(map);
  // 从map中取数据
  let s1 = map.get("语文");
  console.log(s1);
  let s2 = map.get("数学");
  console.log(s2);
  
}

{
  // Map的构造还可以接受一个数组参数
  // 数组必须符合下面的格式
  let arr = [
    [1,"a"],
    ["x","aa"],
    ["name","zhangsan"]
  ];
  let map = new Map(arr);
  console.log(map);
}

{
  let map = new Map([["a","1"],["b","2"],["c","3"]]);
  console.log(map);
  map.set("d","4"); // 设置/添加
  console.log(map);
  console.log(map.get("a"));
  console.log(map.size);
  // 删除
  map.delete("a");
  console.log(map);
  // 遍历
  map.forEach((val,key,m)=>{
    console.log(val)
    console.log(key)
    console.log(m);
  });
  // 遍历所有的key
  let keys = map.keys(); 
  console.log(keys);
  // 所有的vals
  let vals = map.values();
  console.log(vals);
  // 所有的键值对
  let entries = map.entries();
  console.log(entries);

  for(let k of entries){
    console.log(k);
  }

  //遍历器
  console.log(keys);
  // console.log(keys.next());
  // console.log(keys.next());
  // console.log(keys.next());
  // console.log(keys.next());
  let k = keys.next();
  while(!k.done){
    console.log(k.value);
    k = keys.next();
  }
}

