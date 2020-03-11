{
  // 使用传统的回调方式
  let time = callback=>{
    setTimeout(()=>{
      console.log("2秒钟过去了");
      callback();
    },2000);
  }

  // console.log("程序开始");
  // time(()=>{
  //   time(()=>{
  //     time(()=>{
  //       console.log("over");
  //     })
  //   })
  // })

}

{
  // 使用promise
  let time = function(){
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        console.log("2秒钟过去了");
        resolve();
      },2000);
    });
  }

  // console.log("开始");
  // time().then(function(){
  //   console.log("成功1");
  //   console.log("结束1");
  //   return time();
  // }).then(function(){
  //   console.log("成功2");
  //   console.log("结束2");
  //   return time();
  // }).then(function(){
  //   console.log("成功3");
  //   console.log("结束3");
  //   console.log("over");
  // })
  // promise对象的then方法中有两个参数:
  // 第一个function表示异步操作成功后的回调函数,对应resolve()
  // 第二个function表示异步操作失败后的回调函数,对应reject()
}

{
//创建一个promise对象,2秒后生成一个随机数,如果大于等于60,则表示成功,否则失败
  let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let rand = Math.random()*100;
      console.log(rand);
      if(rand>=60){
        resolve();
      }else{
        reject();
      }
    },2000);
  });
  p.then(()=>{
    console.log("成功");
  },()=>{
    console.log("失败");
  });
}