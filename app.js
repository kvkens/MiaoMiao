/**
 * title : 喵喵日记社区主程序
 * author: Kvkens
 * update: 2016.01.27 15:00:00
 */

var express = require("express");//引用express
var app = express();//获取express的app对象
var path = require('path');
app.set('views', path.join(__dirname, 'views'));//设置模板目录
app.set('view engine', 'html');//设置ejs引擎
app.engine('html', require('ejs-mate'));//可以使用.html
app.locals._layoutFile = 'layout.html';
app.use(express.static(path.join(__dirname, 'assets')));//assets文件夹作为前端静态资源目录

app.get("/",function(req,res){
	res.render("test/test",{version:"1.0.0"});
});

app.listen(process.env.PORT || 3000,function(){
	console.log("listen ok!");
});