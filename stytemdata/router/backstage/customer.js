var express = require("express")
var router = express.Router()

var operation = require("./operation")

router.get("/customer", function (req, res) {
  var url = 'select * from user,customer where user.userName =customer.userName'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/customer/select", function (req, res) {
  var id = req.body.id;
  var url = 'select * from user,customer where user.userName =customer.userName and customer.cusId = "' + id + '"'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

module.exports = router