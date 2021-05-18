var express = require("express")
var router = express.Router()

var operation = require("./operation")

router.get("/supplier", function (req, res) {
  var url = 'select * from supplier'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})
router.post("/supplier/add", function (req, res) {
  var url = 'insert into supplier values("' + req.body.id + '","' + req.body.name + '","' + req.body.manager + '","' + req.body.sex + '","' + req.body.age + '","' + req.body.tel + '","' + req.body.address + '","' + req.body.remark + '")'
  operation.add_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/supplier/delete", function (req, res) {
  var url = 'delete from supplier where supId = "' + req.body.id + '"'
  operation.delete_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/supplier/update", function (req, res) {
  var url = 'update supplier set supName= "' + req.body.name + '",supManager = "' + req.body.manager + '",supSex= "' + req.body.sex + '",supAge= "' + req.body.age + '",supTel= "' + req.body.tel + '",supAddress= "' + req.body.address + '",supRemark= "' + req.body.remark + '" where supId = "' + req.body.id + '"'
  operation.update_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/supplier/select", function (req, res) {
  var url = 'select * from supplier where supName like "%' + req.body.id + '%"'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

module.exports = router