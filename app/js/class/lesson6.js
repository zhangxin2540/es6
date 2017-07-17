{
    //用于将一组值，转换为数组
    let arr=Array.of(3,5,3,89,52);
    console.log(arr);
    let empty=Array.of();
    console.log(empty,empty);//不传东西返回的是空数组
}

{
    //把类数组转化成数组
    let p=document.querySelectorAll('p');
    let pArr=Array.from(p);
    pArr.forEach(function(item){
        console.log(item.textContent);
    })

    console.log(Array.from([1,3,5],function(item){return item*2}));
}

{
    //填充数组，替换成同一个值,fill
    console.log('fill-7',[1,5,null].fill(7));
    //如果fill(7,n)有第二个参数,表示从索引n开始替换，直到结束
    //如果fill(7,n,m)有第三个参数,表示从索引n开始替换到索引m(不包括m)
    console.log('fill,pos',['a','b','c','d'].fill(7,1,2));
}

{
    let ary=[1,2,3];
    for(let vaue of ary){
        //console.log(vaue);
    }
    for(let index of ['a','b','c'].keys()){
        console.log(index);
    }
    for(let values of ['a','b','c'].values()){
        console.log(values);
    }
    for(let [index,values] of ['a','b','c'].entries()){//没有兼容问题
        console.log(index,values);
    }
}

{
    //把数组当中的指定数，放到指定位置
    //copyWithin(n,m,k)把索引m到k(不包括k)之间的值，替换到n的位置
    console.log([1,2,3,4,5,6].copyWithin(0,3,4));
}

{   //找到与条件相匹配的值，返回。不继续找了
    console.log([1,2,3,4,5,6].find(function(item){return item>3}));
    //找到与条件相匹配的索引，返回。不继续找了
    console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));
}

{
    //判断一个数组里是不是某个数组的存在，返回布尔值。
    console.log('number',[1,2,3,NaN].includes(1));
    console.log('number',[1,2,3,NaN].includes(NaN));
}