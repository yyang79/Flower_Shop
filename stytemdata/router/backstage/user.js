var express = require("express")
var router = express.Router()

var operation = require("./operation")

router.get("/user", function (req, res) {
  var url = 'select * from user'
  operation.select_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

router.get("/chat/user", function (req, res) {
  var url = 'select * from user where userType = "花店用户"'
  operation.select_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

router.post("/saler/add", function (req, res) {
  var data = req.body.data
  var url = 'insert into user(userName,userPad,userType,userStatus) values("' + data.userName + '","' + data.userPad + '","员工","启用");'
  url += 'insert into saler(salerId,salerPad,salerName,salerAge,salerSex,salerTel,salerAddress,salerPay,salerStatus) values("' + data.userName + '","' + data.userPad + '","' + data.name + '","' + data.age + '","' + data.sex + '","' + data.tel + '","' + data.address + '","' + data.pay + '","在职")'
  operation.add_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

router.post("/saler/delete", function (req, res) {
  var data = req.body.data
  var url = 'delete from user where userName = "'+userName+'"'
  url += 'delete from saler where salerId = "'+userName+'"'
  operation.add_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

router.post("/user/select", function (req, res) {
  var url = 'select * from user where user.userName like "%' + req.body.search + '%"'
  operation.select_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

router.post("/user/limit", function (req, res) {
  var url = 'update user set userStatus = "禁用" where userName = "' + req.body.id + '"'
  operation.update_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

router.post("/user/enable", function (req, res) {
  var url = 'update user set userStatus = "启用" where userName = "' + req.body.id + '"'
  operation.update_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

router.get("/saler", function (req, res) {
  var url = 'select * from saler'
  operation.select_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})
module.exports = router