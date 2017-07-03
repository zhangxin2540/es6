import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';//命令行参数

gulp.task('browser',(cb)=>{
    if(!args.watch) return cb()
    gulp.watch('app/**/*.js',['scripts']);//监听'app/**/*.js'，自动调用scripts脚本(执行什么任务)
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);
})