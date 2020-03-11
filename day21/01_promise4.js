{
  // Promise.all()方法
  // 将多个promise对象封装成一个新的promise对象
  // 只有当所有的promise对象的状态都转变为fulfilled状态
  // 新的promise对象的状态才会转变为fulfilled
  let loadImage = path=>{
    return new Promise(resolve=>{
      let img = document.createElement("img");
      img.src = path;
      img.height = 200;
      img.onload = ()=>{
        resolve(img);
      }
    });
  }

  /* Promise.all([
    loadImage("https://inews.gtimg.com/newsapp_bt/0/10902915189/1000"),
    loadImage("https://inews.gtimg.com/newsapp_bt/0/10902924085/1000"),
    loadImage("https://inews.gtimg.com/newsapp_bt/0/10902927067/1000"),
    loadImage("http://a1.att.hudong.com/71/66/01300000371505124079664198511.jpg")
  ]).then(imgs=>{
    console.log(imgs);
    imgs.forEach(img=>{
      document.body.appendChild(img);
    })
  }) */

  // loadImage("https://inews.gtimg.com/newsapp_bt/0/10902915189/1000")
  // .then(img=>{
  //   document.body.appendChild(img);
  // });
  // loadImage("https://inews.gtimg.com/newsapp_bt/0/10902924085/1000")
  // .then(img=>{
  //   document.body.appendChild(img);
  // });
  // loadImage("https://inews.gtimg.com/newsapp_bt/0/10902927067/1000")
  // .then(img=>{
  //   document.body.appendChild(img);
  // });
  // loadImage("http://a1.att.hudong.com/71/66/01300000371505124079664198511.jpg")
  // .then(img=>{
  //   document.body.appendChild(img);
  // });

  // Promise.race()
  // 将多个promise对象封装成一个新的promise对象
  // 当promise对象中有一个状态转变为fulfilled状态时
  // 新的promise对象的状态就会转变为fulfilled状态

  Promise.race([
    loadImage("https://inews.gtimg.com/newsapp_bt/0/10902915189/1000"),
    loadImage("https://inews.gtimg.com/newsapp_bt/0/10902924085/1000"),
    loadImage("https://inews.gtimg.com/newsapp_bt/0/10902927067/1000"),
    loadImage("http://a1.att.hudong.com/71/66/01300000371505124079664198511.jpg")
  ]).then(img=>{
    document.body.appendChild(img);
  })
}