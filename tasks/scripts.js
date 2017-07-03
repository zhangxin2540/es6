import gulp from 'gulp';
import gulpif from 'gulp-if';//gulp做判断的
import concat from 'gulp-concat';//处理文件拼接
import webpack from 'webpack';//打包
import gulpWebpack from 'webpack-stream';//*/
import named from 'vinyl-named';//文件重命名
import livereload from 'gulp-livereload';//热更新
import plumber from 'gulp-plumber';//出理文件信息流的
import rename from 'gulp-rename';//文件重命名
import uglify from 'gulp-uglify';//压缩js,css
import {log,colors} from 'gulp-util';//命令行工具输出和色彩
import args from './util/args';//命令行参数进行解析

//创建一个任务
/*gulp.task('scripts',()=>{
   return gulp.src(['app/js/index.js'])//打开js文件
    .pipe(plumber({
        errorHandle:funcion(){

        }
    }))//处理常规的逻辑错误
    .pipe(named())//文件重新命名
    .pipe(gulpWebpack({//js编译
        module:{
            loaders:[{
                test:/\.js$/,
                loader:'babel'
            }]
        }
    }),null,(err,stats)=>{
        log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
            chunks:false
        }))
    })

    .pipe(gulp.dest('server/public/js'))//指定路径 编译好的路径
    .pipe(rename({//重新备份
        basename:'cp',
        extname:'.min.js'
    }))
    .pipe(uglify({//压缩
        compress:{properties:false},
        output:{'quote_keys':true}
    }))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch,livereload()))
})*/
gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandle:function(){

      }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch,livereload()))
})
