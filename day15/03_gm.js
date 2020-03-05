var gm = require("gm");


gm('./1.jpg')
.stroke("#000000")
.drawCircle(20, 20, 20, 10)
.font("simkai.ttf", 36)
// .drawText(40, 40, "GMagick!中文字体")
.write("./2.jpg", function (err) {
  if (!err) console.log('done');
});



// gm('./1.jpg')
// .flip() // 垂直翻转
// .magnify() // 尺寸扩大一倍
// .rotate('green', 45) // 旋转
// .blur(7, 9) // 聚焦
// .crop(300, 300, 150, 130) // 裁剪
// .edge(3)
// .write('./3.jpg', function (err) {
//   if (!err) console.log('crazytown has arrived');
// });





