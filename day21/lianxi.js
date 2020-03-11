let show = (name,ms)=>{
  return new Promise((resolve,reject)=>{
    let rand = parseInt(Math.random()*50)+10;
    setTimeout(()=>{
      console.log(name,rand);
      if(rand>35){
        resolve(`${name}准备好了`);
      }else{
        // reject(`${name}错过了`);
      }
    },ms)
  })
}

Promise.race([
  show("张三",2000),
  show("李四",1000),
  show("王五",3000),
  show("赵六",1000)
]).then(msg=>{
  console.log(msg);
})




/* Promise.all([
  show("张三",2000),
  show("李四",1000),
  show("王五",3000),
  show("赵六",1000)
]).then(msgs=>{
  console.log(msgs);
  console.log("出发");
},err=>{
  console.log(err);
}); */


