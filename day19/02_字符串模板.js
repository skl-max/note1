{
  // 字符串的新的表示方式
  let a = "abc";
  let b = 'abc';
  let c = `abc`;
  console.log(a==b);
  console.log(a==c);
  console.log(b==c);

  // 可以换行
  // 变量拼接的改变: 使用表达式${变量名}
  c = `
    <ul>
      <li>${a}</li>
    </ul>
  `;
  console.log(c);
  // document.write(c);
}
{
  // 字符串的拼接
  let [name,age,gender] = ["张三",12,"男孩"];
  // 你好,我叫张三,今年12岁,是一个男孩
  let str = "你好,我叫"+name+",今年"+age+"岁,是一个"+gender;
  console.log(str);
  let str2 = `你好,我叫${name},今年${age}岁,是一个${gender}`;
  console.log(str2);
}

{
  let age = 10;
  // 模板字符串中的表达式
  console.log(`aa ${1+2} bb`); // aa 3 bb
  console.log(`aa ${5>3} bb`); // aa true bb
  console.log(`aa ${4>6 || 7<3} bb`); // 
  console.log(`aa ${age>18? "成年" : "未成年"} bb`);
  console.log(`aa ${`x`} bb`);
}

{
  // 新增的方法
  // trim(),trimLeft(),trimRight(),trimStart(),trimEnd()
  // 去除字符串首尾的空格
  let str = `   abc abc  `;
  console.log(str.trim());
  console.log(str.trimLeft());
  console.log(str.trimRight());
  console.log(str.trimStart());
  console.log(str.trimEnd());

  // includes(),判断字符串中是否包含某个部分
  str = 'Hello, my name is Jim Green!Nice to meet you!';
  console.log(str.includes("IS"));
  console.log(str.includes("m",40)); // 第二个参数表示从哪个位置开始找

  // startsWith() 判断字符串是否是以某部分开头的
  // endsWith() 是否以某部分结尾
  str = '01234567';
  console.log(str.startsWith("1"));
  // 第二个参数表示从哪个位置开始
  console.log(str.startsWith("2",2));

  str = 'qwertyuiop';
  // 第二个参数表示长度结束的位置
  console.log(str.endsWith("e",3));

  // repeat()重复
  // 参数 >=1 向下取整
  // 参数<1 相当于0
  // 参数<=-1 报错
  str = "ab";
  console.log(str.repeat(3));
  str = "\\";
  console.log(str.repeat(3));
  str = "abc";
  console.log(str.repeat(0)); // ""
  console.log(str.repeat(3.8)); // 3遍,向下取整
  console.log(str.repeat(0.5)); // ""
  console.log(str.repeat(-0.4)); // ""
  // console.log(str.repeat(-1)); // 报错,参数不能小于-1


  // padStart() padEnd()
  // 字符串长度补充
  str = 'abcdef';
  console.log(123456789);
  // 从开头的位置填充#,使原字符串的长度达到9(右对齐)
  console.log(str.padStart(9,"#"));
  console.log(123456789);
  
  // 如果字符串的长度已经达到了目标长度,则不会填充,也不会裁剪
  console.log(str.padStart(3,"#")); // abcdef

  str = "abc";
  console.log(str.padStart(10,"NOT")); // NOTNOTNabc


}
