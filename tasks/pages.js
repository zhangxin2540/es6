//处理构建模版的构建脚本
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';//命令行参数进行解析

gulp.task('pages',()=>{
    return gulp.src('app/**/*.ejs')//打开app下所有的ejs文件
    .pipe(gulp.dest('server'))//把所有ejs原封不动的复制到server目录下
})