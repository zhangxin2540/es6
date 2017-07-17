{
    let regex=new RegExp('xyz','i');
    let regex2=new RegExp(/xyz/i);
    console.log(regex.test('xyz123'),regex2.test('Xyz123'));

    //es6允许正则构造函数第一参数是正则表达式，第二个参数是修饰符
    let regex3=new RegExp(/xyz/ig,'i');//i修饰符覆盖了ig修饰符
    //regex3.flags获取正则表达式的修饰符
    console.log(regex3.flags);
}

{
    let s='bbb_bb_b';
    let a1=/b+/g;//不需要从第二位
    let a2=/b+/y;//从匹配的第二位开始
    console.log('one',a1.exec(s),a2.exec(s));
    console.log('two',a1.exec(s),a2.exec(s));
    //判断是不是开启带y的修饰符 开启ture 没开启false
    console.log(a1.sticky,a2.sticky);
}

{
   console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
   console.log('u-1',/^\uD83D/u.test('\uD83D\uDC2A'));
   console.log(/\u{61}/.test('a')); 
   console.log(/\u{61}/u.test('a'));

   console.log(`\u{20BB7}`); 

   let s=''
}