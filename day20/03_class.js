{
  // class类的使用
  class Stu{
    constructor(id,name){
      console.log("构造函数被调用了");
      // Stu的构造方法
      this.id = id;
      this.name = name;
    }
    say(){
      console.log(this.name);
      // 可以调用其他的方法
      this.study();
    }
    study(){
      console.log(`${this.name}正在学习`);
    }
  }

  var s = new Stu(1,"zs");
  console.log(s);
  s.say();
  

}


{
  // class的继承
  // 动物类
  class Animal{
    constructor(name){
      console.log("父类被调用了");
      // 属性,相当于动物的特征,特点
      this.name = name;
    }
    // 方法,相当于动物的动作
    jiao(){
      console.log(`${this.name}叫了一声`);
    }
    run(){
      console.log(`${this.name}跑走了`);
    }
    jump(){
      console.log(`${this.name}跳高`);
    }
  }

  // 小狗类
  // 实现类与类之间的继承,需要使用关键字extends
  //  子类 extends 父类
  // 子类继承父类后,需要再构造方法中的第一行,先使用super()来重写父类方法
  // (在使用this之前,必须要先调用super() )
  class Dog extends Animal{
    constructor(name,type){
      console.log("调用父类构造之前");
      super(name); // 调用父类构造
      console.log("调用父类构造之后");
      this.type = type;
    }
  }

  var d = new Dog("金毛","宠物狗");
  // console.log(d);
  // d.jiao();

}