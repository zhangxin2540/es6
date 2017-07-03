//放置
import yargs from 'yargs';
const args = yargs
    .option('production',{//区分开发环境和线上环境
        boolean:true,//类型是布尔值
        default:false,//默认值
        describe:'min all scripts'//描述
    })

    .option('watch',{//监听开发环境中修改的文件
        boolean:true,
        default:false,
        describe:'watch all scripts'
    })

    .option('verbose',{//详细输出命令行执行的日志
        boolean:true,
        default:false,
        describe:'log'
    })

    .option('sourcemaps',{//关于xx映射
        describe:'force the creation of sroucemaps'
    })

    .option('port',{//服务器端口
        string:true,
        default:80,
        describe:'server port'
    })

    .argv
    //对输入的命令行，内容以字符串进行解析