var express = require("express")
var router = express.Router()
var mysql = require("mysql")
var operation = require("./operation")

router.get("/new", function (req, res) {
    var url = 'select * from goods where typeName = "新品上架"'
    operation.select_sql(url, function (result) {
        res.send(result)
    })
})

router.get("/love", function (req, res) {
    var url = 'select * from goods where typeName = "鲜花"'
    operation.select_sql(url, function (result) {
        res.send(result)
    })
})

router.get("/friend", function (req, res) {
    var url = 'select * from goods where typeName = "鲜花"'
    operation.select_sql(url, function (result) {
        res.send(result)
    })
})
router.get("/basket", function (req, res) {
    var url = 'select * from goods where typeName = "花篮"'
    operation.select_sql(url, function (result) {
        res.send(result)
    })
})
router.get("/box", function (req, res) {
    var url = 'select * from goods where typeName = "礼盒"'
    operation.select_sql(url, function (result) {
        res.send(result)
    })
})
router.get("/cake", function (req, res) {
    var url = 'select * from goods where typeName = "蛋糕"'
    operation.select_sql(url, function (result) {
        res.send(result)
    })
})
router.get("/plant", function (req, res) {
    var url = 'select * from goods where typeName = "绿植"'
    operation.select_sql(url, function (result) {
        res.send(result)
    })
})

module.exports = router