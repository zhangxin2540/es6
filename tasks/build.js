import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
import args from './util/args';//命令行参数


//先'clean'sever两个相关目录清理，把'css'拷过去，编译'pages'模版，执行脚本'scripts'（'serve'一定放最后执行）
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));