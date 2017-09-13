class Calculate{
    //active:当前号码选中的个数
    //play_name：当前玩法的标识，啥类型的
    computeCount(active,play_name){
        let count = 0;
        const exist = this.play_list.has(play_name);//判断下play_list里有没有这个玩法的标识(play_list是个map类型)
        const arr = new Array(active).fill('0');//选中多少个生成多少个元素的数组
        if(exist && play_name.at(0)==='r'){
            count = Calculate.combine(arr,play_name.split('')[1]);
        }
        return count;//返回计算好的注数
    }
    //奖金范围预测
    computeBonus(active,play_name){

    }
    /*
        组合运算
        arr:数组(点击多少个球，生成同样长度的数组)
        size:组合运算的基数(玩法后面的数字)
    */
    static combine(arr,size){
        let allResult = [];
        (function f(arr,size,result){
            let arrLen = arr.length;//选中了多少个球
            if(size>arrlen){
                return;
            }
            if(size===arrlen){
                allResult.push([].concat(result,arr));
            }else{
                for(let i=0;i<arrlen;i++){
                    let newResult = [].concat(result);
                    newResult.push(arr[i]);
                    if(size===1){
                        allResult.push(newResult);
                    }else{
                        let newArr = [].concat(arr);
                        newArr.splice(0,i+1);
                        f(newArr.size-1,newResult);
                    }
                }
            }
        })(arr,size,[]);
    }
}