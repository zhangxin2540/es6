{
    //基本定义和生成实例 
    class Parent{
        constructor(name = 'zx'){
            this.name = name;
        }
    }
    let parent = new Parent('z');
    //console.log(parent);
}

{
    // 继承 extends

    //子继承父，子类修改父类上的name属性,添加super();
    class Parent{
        constructor(name="liLei"){
            this.name = name;
        }
    }
    class Child extends Parent{
        constructor(name="hanMei",type){
            super(name);//super方法的参数列表，是父类构造函数constructor的参数列表
            //super(); super默认为空，父类构造函数的所有都会使用父类的默认值
            this.type = type;
        }
    }
    let child = new Child('zx');
    let child1 = new Child();
    console.log(child);
    console.log(child1);
}

{
    //getter,setter
   class Parent{
        constructor(name="liLei"){
            this.name = name;
        }
        //读取属性
        get longName(){
            return 'zz '+this.name
        }
        set longName(value){
            this.name = value;
        }
    } 
    let v = new Parent();
    console.log(v);
    console.log('getter',v.longName);
    v.longName = '我恩';
    console.log('setter',v.longName);
    console.log(v);
}

{
    //静态方法:通过类去调用，而不是类的实例去调用。
    class Parent{
        constructor(name="liLei"){
            this.name = name;
        }
        static tell(){
            console.log('tell');
        }
    }

    Parent.tell(); 
}

{
    //静态属性
    class Parent{
        constructor(name="liLei"){
            this.name = name;
        }
        static tell(){
            console.log('tell');
        }
    }

    Parent.type = 'zz';
    console.log(Parent.type);
}