{
    //十进制503
    console.log('B',0b111110111);//用二进制表示法,0b可以大写也可以小写。
    console.log(0o767);//八进制表示方法,0o
}

{
    //用来判断这个数是不是在有效范围之内,不在这个之间存的数就不准了。无尽，有尽
    console.log('15',Number.isFinite(15));
    console.log('NaN',Number.isFinite(NaN));//NaN本身就不是一个数
    console.log('1/0',Number.isFinite('true'/0));
}

{
    //判断一个数是不是整数,接收的参数必须是个整数
    console.log('25',Number.isInteger(25));
    console.log('25.0',Number.isInteger(25.0));
    console.log('25.1',Number.isInteger(25.1));
    console.log('25.9',Number.isInteger('25.9'));
}

{
//返回一个数的整数部分
    console.log('1.9',Math.trunc(1.9));
    console.log('1.1',Math.trunc(1.1));
}

{
    //判断一个数是不是在-2的53次方到2的53次方之间,(不包含这2端点)
    console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
    //判断一个数是不是安全的
    console.log('10',Number.isSafeInteger(10));
}

{
    //判断一个数是正数，负数，0(返回1，-1,0，NaN)
    console.log('-5',Math.sign(-5));//返回-1
    console.log('0',Math.sign(0));//返回0
    console.log('5',Math.sign(5));//返回5
    console.log('50',Math.sign('50'));//返回1，数据类型转换了。
    console.log('NaN',Math.sign(NaN));//NaN
}

{
    //计算立方根(三角函数，对数方法)
    console.log(Math.cbrt(-1));
    console.log(Math.cbrt(8));
}
