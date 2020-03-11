{
  let fs = require("fs");
  // 使用promise处理fs读取文件
  let p = new Promise((resolve,reject)=>{
    fs.readFile("./day21.txt","utf-8",function(err,data){
      if(err){
        reject(err);
        return ;
      }
      resolve(data);
    })
  });

  // p.then(data=>{
  //   console.log("成功");
  //   console.log(data);
  // },err=>{
  //   console.log("失败");
  //   console.log(err);
  // });

}



{
  let fs = require("fs").promises;
  // console.log(fs);
  // fs.readFile("./day21.tx","utf-8")
  // .then(data=>{
  //   console.log(data);
  //   return fs.readFile("../day20/day20.txt","utf-8");
  // },err=>{
  //   console.log(err);
  //   return fs.readFile("../day20/day20.txt","utf-8");
  // })
  // .then(data=>{
  //   console.log(data);
  // },err=>{
  //   console.log(err);
  // })
}

{
  // 连续依次读取3个文件,并将其显示
  let fs = require("fs").promises;
  let read = path => {
    return fs.readFile(path,"utf-8");
  }

  read("./day21.txt")
  .then(data=>{
    console.log("==========第一个文件内容=============");
    console.log(data);
    return read("../day20/day20.txt");
  })
  .then(data=>{
    console.log("==========第er个文件内容=============");
    console.log(data);
    return read("../day19/day19.txt");
  })
  .then(data=>{
    console.log("==========第san个文件内容=============");
    console.log(data);
  })
}

{
  // let fs = require('fs');
  // fs.readFile("./day21.txt","utf-8",function(err,data){
  //   console.log("1111111");
  //   console.log(data);
  //   fs.readFile("../day20/day20.txt","utf-8",function(err,data){
  //     console.log("2222222");
  //     console.log(data);
  //     fs.readFile("../day19/day19.txt","utf-8",function(err,data){
  //       console.log("3333333");
  //       console.log(data);
  //     })
  //   })
  // })
}