import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';//启动一个脚本作为服务器
import args from './util/args';//命令行参数

gulp.task('serve',(cb)=>{
    if(!args.watch) return cb()
     //创建一个服务器  
    //--harmony 要在当前命令行下执行这个后面的脚本
    //'server/bin/www' 一个脚本
    var server=liveserver.new(['--harmony','server/bin/www']);
    server.start();//启动服务器

    //监听server下的js,ejs的模版引擎(js,ejs发生改变刷新浏览器。热更新)
   gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
        server.notify.apply(server,[file]);//通知服务器这个文件发生改变了
        //服务器中路由，接口发生改变，sever重启才能生效
   });
   
   // 'server/routes/**/*.js' 服务器的入口文件，做脚本用的(接口)
   //'server/app. 服务的启动入口
   gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)()
   });
})