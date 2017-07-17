{
  let a,b,rest;
  [a,b]=[1,2]
  console.log(a,b);
}
//数组解构赋值
{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6];
    console.log(a,b,rest);
}
//对象解构赋值
{
    let a,b
    ({a,b}={a:1,b:2})
    console.log(a,b);
}

{
    let a,b,c,rest;
    //[a,b,c]=[1,2];c没有配对成功，undefind.
    [a,b,c=3]=[1,2];//为了防止c变成undefind
    console.log(a,b,c);
}
//解构赋值的应用
//数组解构赋值
//1.变量值交换
{
    let a=1;
    let b=2;
    [a,b]=[b,a];
    console.log(a,b);
}
//2.一个函数返回2个值，取这2个值
{
    function f(){
        return [1,2]
    }
    let a,b;
    [a,b]=f();
    console.log(a,b);
}

//3.一个函数返回几个值，选择性取值
{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,,,b]=f();
    console.log(a,b);//1,5
}

//4.一个函数返回几个值，选择自己需要的那一个值
{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,...b]=f();
    console.log(a,b);//1,[3,4,5] 忽略2个逗号之间的数值
}

//对象解构赋值

{
    let o={p:42,q:true};
    let {p,q}=o;
    console.log(p,q);
}
//对象数据解构的默认值
{
    let {a=10,b=5}={a:3};
    console.log(a,b);
}

//前端和后台数据通信使用json,获取某些json值.

{
    let metaData={
        title:'abc1',
        test:[{
            title:'test1',
            desc:'description'
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]}=metaData;
    console.log(esTitle,cnTitle);
}