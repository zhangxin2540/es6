{
    //简洁表示法
    let o=1;
    let k=2;

    let es5={
        o:o,
        k:k
    };

    let es6={
        o,
        k
    };
    console.log(es5);
    console.log(es6);

    let es5_method={
        hello:function(){
            console.log('hello');
        }
    };
    let es6_method={
        hello(){//方法
            console.log('hello');
        }
    }

    console.log(es5_method.hello(),es6_method.hello())
}

{
    //属性表达式
    let a='b';
    let es5_obj={
        a
    }
    //es5_obj[a]='c';
    /////////////////////
    let es6_obj={
        [a]:'c'
    };
    console.log(es5_obj);
    console.log(es6_obj);
}
{
   //新增api
   //Object.is []比较的是内存地址
   //Object.is和===是一样的
   console.log('字符串',Object.is('abc','abc'),'abc'==='abc'); 
   console.log('数组',Object.is([],[]),[]===[]);

   //浅拷贝
   console.log('拷贝',Object.assign({a:'a'},{b:'b'}));

   //Object.entries()获取属性，属性值
   let test={
        a:'a',
        b:'b'
   };
   for(let [key,value] of Object.entries(test)){
        console.log([key,value]);
   }

   //es7提案，支持不好
   for(let values of Object.values(test)){
        console.log(values);
   }
   //es7提案,扩展运算符
  /* let{a,b,...c}={a:'aaa',b:'bbb',c:'ccc',d:'ddd',e:'eee'};
   console.log(a);
   console.log(b);
   console.log(c);*/
}