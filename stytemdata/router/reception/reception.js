var express = require("express")
var app = express()

var goods = require("./goods")
app.use(goods)
var detailpage = require("./detailpage")
app.use(detailpage)
var move = require("./move")
app.use(move)
var shopcar = require("./shopcar")
app.use(shopcar)
var resigter = require("./resigter")
app.use(resigter)
var recommend = require("./recommend")
app.use(recommend)
var login = require("../login")
app.use(login)
var imgsearch = require("./imgsearch")
app.use(imgsearch)

module.exports = app