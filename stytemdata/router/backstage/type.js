var express = require("express")
var router = express.Router()

var operation = require("./operation")

router.get("/type", function (req, res) {
  var url = 'select * from goodstype'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/type/add", function (req, res) {

  var url = 'insert into goodstype(typeId,typeName) values("' + req.body.id + '","' + req.body.name + '")'
  operation.add_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/type/delete", function (req, res) {
  var url = 'delete from goodstype where typeId = "' + req.body.id + '"'
  operation.delete_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/type/update", function (req, res) {
  var url = 'update goodstype set typeName= "' + req.body.name + '" where typeId = "' + req.body.id + '"'
  operation.update_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/type/select", function (req, res) {
  var url = 'select * from goodstype where typeName like "%' + req.body.id + '%"'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

module.exports = router