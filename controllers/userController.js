/**
 * title : 喵喵日记社区用户控制器
 * author: Kvkens
 * update: 2016.02.01 16:50:00
 */
exports.join = function(req,res,next){
	res.render("user/join");
}
exports.login = function(req,res,next){
	res.render("user/login");
}
