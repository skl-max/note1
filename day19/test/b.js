

var s = Symbol();

module.exports = {
  "id": 1,
  [s]: 23,
  "say": function(){
    console.log(this[s]);
    if(this[s]>10){
      console.log("成年");
    }else{
      console.log("未成年");
    }
  }
}