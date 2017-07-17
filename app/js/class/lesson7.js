//函数扩展

{
    //函数默认值
    function test(x,y = 'world',c){
        console.log('默认值',x,y,c);
    }
    test('hello');
    test('hello','张欣');
}

{
    //作用域
    let x='test';
    function test2(x,y=x){
        //let x=1; 报错不能重复声明x
        console.log(x);
        console.log('作用域',x,y);
    }
    test2('kill');//kill 作用域 kill kill
    test2();//undefind undefind
}

{
    //函数里面没有声明这个变量，向上一级作用域找
    let x='test';
    function test2(c,y=x){
        console.log(x);
        console.log('作用域',c,y);
    }

    test2();//test 作用域 undefined test
}

{
    //res参数
    function test3(...arg){
        //把arg变成数组，arg后面不能有参数
        console.log(arg);//[1,2,3,4,5,'a']
        for(let v of arg){
            console.log('rest',v);
        }
    }
    test3(1,2,3,4,5,'a');
}

{
    //把数组变成离散的值
    console.log(...[1,2,3]);
    console.log('a',...[1,2,3]);
}

{
    //箭头函数
    //  变量 参数 返回值
    let arrow = v => v*2
    console.log(arrow(3));
    //如果没有参数
    let arrow2 = () => 5;
    console.log(arrow2());
}

{
    //尾调用:一个函数最后返回一个函数叫尾调用
    function tail(x){
        console.log('tail',x);
    }
    function fx(x){
        return tail(x)
    }
    fx(123);
    //好处：提升性能，代替函数递归
}