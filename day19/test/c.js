var sname = Symbol["name"];

function Stu(id,name,age){
  this[Symbol("id")] = id;
  this[sname] = name;
  this.age = age;
}

Stu.prototype = {
  say(){
    console.log(`大家好,我叫${this[sname]}`);
  }
}


module.exports = Stu;

