/**
 * title : 喵喵日记社区路由机制
 * author: Kvkens
 * update: 2016.01.28 15:00:00
 */

var express = require("express");
var router = express.Router();

var home = require("./controllers/homeController");

router.get("/",home.index);

module.exports = router;