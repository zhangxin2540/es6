{
    console.log('a',`\u0061`);
    console.log('s',`\u20bb7`);//大于0xFFFF,不能识别
    //es6通过{}把它包起来，可以识别
    console.log('s',`\u{20bb7}`);
}



{
    let s='𠮷';
    console.log('𠮷length',s.length);//每2个字节算一个长度

    console.log('0',s.charAt(0));//对码值处理不到位
    console.log('1',s.charAt(1));
    console.log('at0',s.charCodeAt(0));//对码值处理不到位
    console.log('at1',s.charCodeAt(1));

    //es6取码值 codePointAt
    let s1='𠮷a';
    console.log('length',s1.length);
    console.log('code0',s1.codePointAt(0));//es6 取得第一个字符的10进制编码
    console.log('code0',s1.codePointAt(0).toString(16));//换成16进制
    console.log('code1',s1.codePointAt(1));
    console.log('code1',s1.codePointAt(1).toString(16));
    console.log('code2',s1.codePointAt(2).toString(16));

    //es6把码值变成字符 fromCodePoint
    console.log(String.fromCharCode('0x20bb7'));
    console.log(String.fromCodePoint('0x20bb7'));

    let str='\u{20bb7}abc';
    for(let i=0;i<str.length;i++){
        console.log('es5'+str[i]);
    }
    //字符串遍历器接口
    for(let code of str){
        console.log('es6',code);
    }
}

{
    let str="string";
    //判断字符串是否包含字符串r
    console.log('includes',str.includes('r'));
    //判断字符串的是不是以s 开头的
    console.log('start',str.startsWith('s',0));
    console.log('end',str.endsWith('g'));
}

{
    let str='abc';
    console.log(str.repeat(2));
}

{
    let name='list';
    let info='hello world';
    let m=`i am ${name},${info}`;
    console.log(m);
}

{
    //自动补全，开始位置
    console.log('1'.padStart(2,'0'));
    //自动补全，结束位置
    console.log('1'.padEnd(2,'0'));
    //console.log('𠮷'.at(0));
}

{
    //标签模版
    let user={
        name:'list',
        info:'hello world'
    };
    console.log(abc`i am ${user.name},${user.info}`);
    function abc(s,v1,v2){
        console.log(s);
        console.log(v1);
        console.log(v2);
        return s+v1+v2;
    }
}

{
    console.log(String.raw`Hi\n${1+2}`);//给\n转义了
    console.log(`Hi\n${1+2}`);
}

{
    var a = 5;
    var b = 10;

    function tag(s,v1,v2){
        console.log(s);
        console.log(s[0]);
        console.log(s[1]);
        console.log(s[2]);
        console.log(v1);
        console.log(v2);
        return "ok";
    }
    tag`Hello1 ${a+b} world1 ${a*b}`;
}