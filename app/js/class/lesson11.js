{
    let a='zz';
    let obj={
        a,
        time:'2017-03-11',
        name:'net',
        _r:123,
        hello(){
            return a;
        }
    };
    let s=obj.hello();
    console.log('s',s);
    //代理
    let monitor=new Proxy(obj,{
        //拦截对象属性的读取
        get(target,key){
            return key==='_r'?target[key]:null;
        },
        //拦截对象设置属性
        set(target,key,value){
            return key==='name'?target[key]=value:target[key];
        },
        //判断一个对象中是否拥有某个属性
        //拦截key in object操作
        has(target,key){
            return key==='name'?target[key]:false;
        },
        //拦截delete
        deleteProperty(target,key){
            return key.startsWith('_')?delete target[key]:void(0);
        },
        //拦截object.keys,object.getOwnPropertySymbol,object.getOwnPropertyName
        ownKeys(target){
            return Object.keys(target).filter(item=>item!='a')
        }
    });
    console.log('get',monitor.name);
    monitor.name='张欣';
    monitor._r=45;
    console.log('get',monitor._r);
    console.log('set',monitor);
    console.log('has','name' in monitor,'time' in monitor);
    /*delete monitor._r;
    console.log('delete',monitor);*/
    console.log('keys',Object.keys(monitor));

    for(let [key,value] of Object.entries(monitor)){
        console.log('key:',key,'value:',value);
    }
}

{
    let obj={
        time:'2017-03-11',
        name:'net',
        _r:123,
        hello(){
            return a;
        }
    }; 
    console.log('Reflect get',Reflect.get(obj,'time')); 
    Reflect.set(obj,'name','zhangxin');
    console.log(obj);
    console.log('has',Reflect.has(obj,'name'));
}