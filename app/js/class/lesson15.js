
//Generator 异步编程的解决方案
{
//generator基本定义
   let tell = function*(){
        console.log('zz');
        yield 'a';
        yield 'b';
        return 'c';
    }
    let k =tell();//第一次执行 函数里面的东西 zz
    console.log(k.next());//第二次执行 next yield 'a'里的东西
    console.log(k.next());//第三次执行 next yield 'b'里的东西
    console.log(k.next());
    console.log(k.next());
}
//Iterator和Generator的结合
{
    let obj ={
        name:'zx',
        age:16,
        city:'北京、上海、广州、天津、武汉、沈阳、哈尔滨、西安、南京、成都、重庆、深圳、杭州、青岛、苏州、太原、郑州、济南、长春、 合肥、长沙、南昌、无锡、昆明、宁波、福州、石家庄'
    }
    obj[Symbol.iterator]=function*(){
        let self = this;
        let str = self.city;
        let strArr = str.split('、');
        for(let value of strArr){
            yield value;
        }

    }
    for(let value of obj){
        console.log(value);
    }
}

{
    let obj={};
    obj[Symbol.iterator]=function*(){
        yield 1;
        yield 2;
        yield 3;
    }
    for(let value of obj){
        console.log('value',value);
    }

}
//状态机，循环3个状态
{
    let state=function*(){
        console.log('zzzzzzzz');
        while(1){
            yield 1;
            yield 2;
            yield 3;
        }
    }
    let states=state();
    console.log(states.next());
    console.log(states.next());
    console.log(states.next());
    console.log(states.next());
    console.log(states.next());
}

//抽奖
{
    let draw=function(count){
        console.log(`剩余${count}次`);
    }
    let residue=function*(count){
        while(count>0){
            count--;
            yield draw(count);
        }
    }

    let star=residue(5);

    let btn =document.createElement('button');
    btn.textContent='抽奖';
    btn.id='start';
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click',function(){
        star.next();
    });
}

//长轮询
{
    let ajax =function*(){
        yield new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve({code:0});
            },200);
        })
    }

    let pull = function(){
        let generator = ajax();
        let step = generator.next();
        step.value.then(function(d){
            if(d.code!=0){
                setTimeout(function(){
                    console.log('wait');
                    pull();
                },1000);
            }else{
                console.log(d);
            }
        })
    }
    pull();
}
//Generator 异步编程解决方案
{
    //定义一个generator
    let test = function*(){
        yield 'a';
        yield 'b';
    }
    let initializeTest = test();
    console.log('定义一个generator1',initializeTest.next());
    console.log('定义一个generator2',initializeTest.next());
    console.log('定义一个generator3',initializeTest.next());
}
{
    //Iterator和Generator的结合
    let obj={
        ary:[2,6,5,4],
        [Symbol.iterator]:function*(){
            let self =this;
            let strArr =self.ary;
            for(let value of strArr){
                yield value;
            }
        }
    };
    for(let value of obj){
          console.log('和iterator结合',value);  
    }

}

{
    //状态机
    let status = function*(){
        while(1){
            yield 'a1';
            yield 'a2';
            yield 'a3';
        }
    }
    let initializeStatus =status();
    console.log(initializeStatus.next());
    console.log(initializeStatus.next());
    console.log(initializeStatus.next());
    console.log(initializeStatus.next());
}
{
    //抽奖
    function draw(count){
        console.log(`剩余${count}次抽奖机会`);
    }
    let overTimes = function*(count){
        while(count>0){
            count--;
            yield draw(count);
        }
    }
    let initializeTimes = overTimes(5);
    let button = document.createElement('button');
    button.id = 'btn';
    button .textContent = '按钮';
    document.body.appendChild(button);
    let btn = document.getElementById('btn');
    btn.addEventListener('click',function(){
        initializeTimes.next();
    },false);
}
{
    //长轮询：通过定时器不断的去访问某一数据接口
    let ajax = function*(){
        yield new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve({code:0});
            },200);
        });
    }
    let pull = function(){
        let initializePull = ajax();
        let nextAjax = initializePull.next();
        nextAjax.value.then(function(d){
            if(d.code!=0){
                setTimeout(function(){
                    console.log('wait');
                    pull();
                },1000);
            }else{
                console.log('成功');
            }
        });
    }
    pull();

}