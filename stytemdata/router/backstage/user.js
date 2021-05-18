var express = require("express")
var router = express.Router()

var operation = require("./operation")

router.get("/user", function (req, res) {
  var url = 'select * from user,customer where user.userName =customer.userName'
  operation.select_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

router.post("/user/select", function (req, res) {
  var url = 'select * from user,customer where user.userName =customer.userName and user.userName like "%' + req.body.search + '%"'
  operation.select_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

module.exports = router