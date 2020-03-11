{
  // catch方法
  // 与then方法中的第二个参数类似,用于处理reject的情况
  let show = (n)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(n>10){
          resolve("比10大");
        }else{
          reject("比10小");
        }
      },2000)
    })
  }
  // show(5).then(data=>{
  //   console.log(data);
  //   return show(15);
  // }).then(data=>{
  //   console.log(data);
  // })
  // .catch(err=>{
  //   console.log("catch error: ",err);
  // })
}

{
  // finally方法,无论异步操作是否成功,最终都会执行
  let show = ()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        // resolve("ok");
        reject();
      },2000)
    })
  }
  show().then(data=>{
    console.log(data);
  },()=>{
    console.log('失败');
  })
  .finally(()=>{
    console.log("finally");
  })

}