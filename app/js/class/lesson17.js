//模块化
//1.导出语句

/*export let A =123;

export function test(){
    console.log('test');
}

export class Hello{
    test(){
        console.log('class');
    }
}*/

//3.方法
let A =123;
function test(){
    console.log('test');
}
class Hello{
    test(){
        console.log('class');
    }
}

export default{
    A,
    test,
    Hello
}