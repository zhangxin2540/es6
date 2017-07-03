import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';//命令行参数进行解析

gulp.task('css',()=>{
    return gulp.src('app/**/*.css')//打开app下所有的css文件
    .pipe(gulp.dest('server/public'))//把所有ejs原封不动的复制到server目录下
    .pipe(gulpif(args.watch,livereload()))//监听是不是热更新
})