/**
 * title : 喵喵日记社区主程序
 * author: Kvkens
 * update: 2016.01.28 11:00:00
 */

//Express
var express = require("express");//引用express
var app = express();//获取express的app对象
var path = require('path');//路径引用
var webRouter = require("./webRouter");//路由引入

app.use("/",webRouter);//启用页面路由
app.use(express.static(path.join(__dirname, 'assets')));//assets文件夹作为前端静态资源目录
//ejs配置
app.set('views', path.join(__dirname, 'views'));//设置模板目录
app.set('view engine', 'html');//设置ejs引擎
app.engine('html', require('ejs-mate'));//可以使用.html
app.locals._layoutFile = 'layout.html';//默认layout文件

app.listen(process.env.PORT || 3000,function(){
	console.log("MiaoMiao Group Is Start!");
});