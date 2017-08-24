{
    let arr =['hello','world'];
    let map =arr[Symbol.iterator]();
    //console.log(map.next());
    //console.log(map.next());
    //console.log(map.next());
}

{
    let obj ={
        start:[2,6,5,8],
        end:[9,86,5],
        [Symbol.iterator](){
            let self = this;
            let index =0;
            let arr=self.start.concat(self.end);
            let len =arr.length;
                return {
                    next(){
                        if(index<len){
                            return {
                                value:arr[index++],
                                done:false
                            }
                        }else{
                            return {
                                value:arr[index++],
                                done:true
                            }
                        }
                    }
                }
        }
    }
    for(let key of obj){
        //console.log(key);
    }
}

{
    //自定义遍历器接口
    let obj ={
        start:{
            name:'zx',
            age:18
        },
        end:{
            name:'zz',
            age:20
        },
        [Symbol.iterator](){
            let self = this,
                index =0,
                arr=Array.of(self.start.name,self.end.name),
                len =arr.length;
               // console.log(arr);
                return {
                    next(){
                        if(index<len){
                            return {
                                value:arr[index++],
                                done:false
                            }
                        }else{
                            return {
                                value:arr[index++],
                                done:true
                            }
                        }
                    }
                }
        }
    }
    for(let key of obj){
        //console.log(key);
    }
}
{
    var obj ={
        name:'zx',
        age:16,
        city:'北京、上海、广州、天津、武汉、沈阳、哈尔滨、西安、南京、成都、重庆、深圳、杭州、青岛、苏州、太原、郑州、济南、长春、 合肥、长沙、南昌、无锡、昆明、宁波、福州、石家庄',
        [Symbol.iterator](){
            let self = this;
            let str = self.city;
            let strArr = str.split('、');
            let len =strArr.length;
            console.log(strArr);
            let index = 0;
            return {
                next(){
                    if(index<len){
                        return {
                            value:strArr[index++],
                            done:false
                        }
                    }else{
                        return {
                            value:strArr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    }
    for(let key of obj){
        console.log(key);
    }
}