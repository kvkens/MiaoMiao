/**
 * title : 喵喵日记社区路由机制
 * author: Kvkens
 * update: 2016.01.28 15:00:00
 */

var express = require("express");
var router = express.Router();

var home = require("./controllers/homeController");
var user = require("./controllers/userController");


//首页
router.get("/",home.index);
//加入
router.get("/Join",user.join);
//登录
router.get("/Login",user.login);


module.exports = router;