import gulp from 'gulp';
import del from 'del';
import args from './util/args';//命令行参数

gulp.task('clean',()=>{
    return del(['server/public','server/views'])
})