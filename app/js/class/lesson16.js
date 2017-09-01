{
    let readonly = function(target,name,descriptor){
        descriptor.writable = false;
        return descriptor;
    };
     
    class Test{
        constructor(name = 'zx'){
            this.name = name;
        }
        @readonly
        time(){
            return '2017-03-11';
        }
    }
    let test = new Test();
    console.log(test);
    console.log(test.time());
}

{
    //增加类上的静态属性
    let typename =function(target,name,descriptor){
        target.myname = 'hello';
    }
    @typename
    class Test{

    }
    console.log('静态属性',Test.myname);//只能类去调用
}

{
    let log=(type)=>{
        return function(target,name,descriptor){
            let src_method = descriptor.value;
            console.log(src_method);
            descriptor.value = (...arg) =>{
                src_method.apply(target,arg);
                console.log(`log ${type}`);
            }
        }
    }
    class AD{
        @log('show')
        show(){
            console.log('ad is show');
        }
        @log('click')
        click(){
            console.log('ad is click');
        }
    }
    let ad = new AD();
    ad.show();
    ad.click();
}