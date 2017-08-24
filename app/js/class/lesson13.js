{
    let ajax = function(callback){
        //console.log('ajax执行');
        setTimeout(function(){
            callback&&callback()
        },1000);
    };

    ajax(function(){
        //console.log('callback执行');
    });
}

{
    let ajax =function(){
        //console.log('ajax执行2');
        return new Promise(function(resolve,reject){
            //resolve:执行下一步操作
            //reject:中断当前操作           
            setTimeout(function(){
                reject();
            },1000);

        });
    };

    ajax().then(function(){
        //console.log('promise');
    },function(){
        //console.log('中断');
    });
}

{
    let ajax =function(){
        //console.log('ajax执行');
        return new Promise(function(resolve,reject){  
            setTimeout(function(){
                resolve();
            },1000);
        });
    };

    ajax()
    .then(function(){
        //console.log('promise');
        return new Promise(function(resolve,reject){  
            setTimeout(function(){
                resolve();
            },1000);
        });
    })
    .then(function(){
        //console.log('promise1');
    });
}
{
    let ajax =function(num){
        console.log('执行1');
        return new Promise(function(resolve,reject){
            if(num>5){
                resolve();
            }else{
                throw new Error('出错了');
            }
        });
    };
    ajax(6)
    .then(function(){
        //console.log('log',6);
    }).catch(function(err){
        console.log('catch',err);
    });

    ajax(3)
    .then(function(){
        //console.log('log',3);
    }).catch(function(err){//捕获错误
        //console.log('catch',err);
    });
}
//所有图片加载完，放到页面上
{
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src=src;
            img.onload=function(){
                resolve(img);
            }
            img.onerror=function(){
                reject(err);
            }
        });
    }
    function showImgs(imgs){
        imgs.forEach(function(img){
            document.body.appendChild(img);
        });
    }
    Promise.all([//3个状态都改变，才会显示到页面中
        loadImg('https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1294255273,1216906468&fm=173&s=EAA0DD4B4E0B07740ACDBDAB03007002&w=397&h=233&img.JPEG'),
        loadImg('https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3785233143,501557558&fm=173&s=B2131CCF965A3FD0D00DC93C03005043&w=391&h=220&img.JPEG'),
        loadImg('https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1109829313,3173478913&fm=173&s=58C0688E08030A591AB83ABD0300D004&w=537&h=324&img.JPEG')
    ])
    .then(showImgs);
}
 //有一个图片加载完就添加到页面上
{
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src=src;
            img.onload=function(){
                resolve(img);
            }
            img.onerror=function(){
                reject(err);
            }
        });
    }
    function showImgs(img){  
        let p =document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }
    Promise.race([//1个状态都改变，才会显示到页面中
        loadImg('https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1294255273,1216906468&fm=173&s=EAA0DD4B4E0B07740ACDBDAB03007002&w=397&h=233&img.JPEG'),
        loadImg('https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3785233143,501557558&fm=173&s=B2131CCF965A3FD0D00DC93C03005043&w=391&h=220&img.JPEG'),
        loadImg('https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1109829313,3173478913&fm=173&s=58C0688E08030A591AB83ABD0300D004&w=537&h=324&img.JPEG')
    ])
    .then(showImgs);
}