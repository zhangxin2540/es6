//Symbol 提供一个独一无二的值
//Symbol 的作用
{
    //声明
    let a1=Symbol();
    let a2=Symbol();
    console.log(a1===a2);

    let a3=Symbol.for('a3');//a3是key值
    let a4=Symbol.for('a3');
    console.log(a3===a4);//true
}

{
    let a1=Symbol.for('abc');
    let a2=Symbol.for('ab');
    let obj={
        [a1]:'123',
        [a2]:345,
        'c':456
    };
   // console.log(obj);

    //取不到symbol的key
    for(let [key,value] of Object.entries(obj)){
        console.log('let of',key+':',value);
    }

    //取symbol的key,返回的是个数组。
    console.log(Object.getOwnPropertySymbols(obj));
    //取symbol的value
    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]);
    });

    //取到所有的key,value
    Reflect.ownKeys(obj).forEach(function(item){
        console.log(item);
        console.log(obj[item]);
    });
}

