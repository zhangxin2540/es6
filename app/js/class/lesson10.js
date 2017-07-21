//set
{
    let list=new Set();
    list.add(5);//向list里增加元素
    list.add(7);
    //获取list的长度
    console.log('size',list.size);
}
{
    let arr=[1,2,3,4];
    let list=new Set(arr);
    console.log(typeof list);
    console.log('size',list.size);
}
{
    //去重
    //Set集合中的元素不重复，添加不成功也不报错。
    let list=new Set();
    list.add(1);
    list.add(2);
    list.add(1);
    console.log('list',list);

    //去重时数据类型必须一致
    let arr=[1,2,3,'1','2','2',1,3,5,7];
    let list2=new Set(arr);
    console.log(list2);
}
{
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);
    console.log('has',list.has('add'));
    console.log('includes',arr.includes('add'));

    console.log(list.delete('add'),'delete',list);
    list.clear();
    console.log(list);//清空set
}

{
    //遍历
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);
    for(let key of list.keys()){
         console.log('key',key);
    }

    for(let value of list.values()){
         console.log('value',value);
    }

    for(let value of list){
         console.log('value',value);
    }

    for(let [key,value] of list.entries()){
         console.log('entries',key,value);
    }
    list.forEach(function(item){
        console.log(item);
    });
}

//weakSet
//支持数据类型不一样，只能是对象
//弱引入
{
    let weakList=new WeakSet();
    let arg={};
    weakList.add(arg);
    //index.js:8866 Uncaught TypeError: Invalid value used in weak set
    //无效值
    //weakList.add(1);
}


//map
{
    let map=new Map();
    let arr=[1,2,3];

//key可以是任何数据类型
    map.set(arr,452);
//map.get(arr)获取arr的值
    console.log('map',map,map.get(arr))
}

{
    let map=new Map([['a',123],['b',456]]);
    for(let [key,value] of map.entries()){
        console.log(key,value);
    }
    for(let key of map.keys()){
        console.log(key);
    }
    for(let value of map.values()){
        console.log(value);
    }
    console.log('map args',map);
    console.log('size',map.size);
    console.log('delete',map.delete('a'),map);
    console.log('has',map.has('b'));
    console.log('clear',map.clear(),map);

}

//weakmap
{
    let weakmap=new WeakMap();
    let o=[];
    weakmap.set(o,123);
    /*console.log(weakmap.get(o));*/
}


//数据结构横向对比,增，查，改，删
//Map与Array的对比
{
    let map=new Map();
    let array=[];
    let item={t:1};
    //增
    map.set('t',1);
    array.push(item);
    console.info('map-array',map,array);
    //查
    let map_exist=map.has('t');
    let array_exist=array.find(item=>item.t);
    console.log('查',map_exist,array_exist);
    //改
    map.set('t',2);
    array.forEach(item=>item.t?item.t=2:'');
    console.log('改',map,array);

    //删除
    map.delete('t');
    let n=array.findIndex(item=>item.t);
    array.splice(n,1);
    console.log('删除',map,array);
}

{
    //set和array的对比
    let set=new Set();
    let ary=[];
    let obj={t:1};
    //增
    set.add(obj);
    ary.push({t:1});
    console.log('增',set,ary);
    //查
    let set_exist=set.has(obj);
    let ary_exist=ary.find(item=>item.t);
    console.log('查',set_exist,ary_exist);
    //改
    set.forEach(item=>item.t?item.t=2:'');
    ary.forEach(item=>item.t?item.t=2:'');
    console.log('改',set,ary);
    //删除
    set.forEach(item=>item.t?set.delete(item):'');
    let index=ary.findIndex(item=>item.t);
    ary.splice(index,1);
    console.log('删除',set,ary);  
}

{
    //map,set,object对比
    let map=new Map();
    let set=new Set();
    let item={t:1};
    let obj={};
    //增
    map.set('t',1);
    set.add(item);
    obj['t']=1;
    console.log('增',map,set,obj);

    //查
    let map_has=map.has('t');
    let set_has=set.has(item);
    let obj_in='t' in obj;
    console.log('查',map_has,set_has,obj_in);

    //改
    map.set('t',2);
    set.forEach(item=>item.t?item.t=2:'');
    obj['t']=2;
    console.log(map,set,obj);
    //删除
    map.delete('t');
    set.forEach(item=>item.t?set.delete(item):item);
    delete obj['t'];
    console.log(map,set,obj);

    let ary=[1,2,4];
    ary.forEach((value,index,ary)=>value>1?ary[index]=value+2:value);  
    //console.log(ary);
   
}