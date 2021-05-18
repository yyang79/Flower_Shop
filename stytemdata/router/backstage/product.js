var express = require("express")
var router = express.Router()

var operation = require("./operation")

router.get("/goods", function (req, res) {
  var url = 'select * from goods,supplier where goods.supName = supplier.supName'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/goods/add", function (req, res) {
  var url = 'insert into goods(goodsId,goodsName,goodsUrl,goodsMaster,goodsPackage,goodsPrice,goodsLanguage,supName,goodsStatus,typeName) values("' + req.body.id + '","' + req.body.name + '","' + req.body.url + '","' + req.body.master + '","' + req.body.package + '","' + req.body.price + '","' + req.body.language + '","' + req.body.supplier + '","' + req.body.status + '","' + req.body.type + '");insert into stock(goodsId,stockNum,stocktrueNum) value("' + req.body.id + '",0,0);'
  operation.add_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/goods/delete", function (req, res) {
  var url = 'delete from goods where goodsId = "' + req.body.id + '"'
  console.log(url)
  operation.delete_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/goods/update", function (req, res) {
  var url = 'update goods set goodsName= "' + req.body.name + '",goodsMaster= "' + req.body.master + '",goodsPackage= "' + req.body.package + '",goodsPrice= "' + req.body.price + '",goodsLanguage= "' + req.body.language + '",supName= "' + req.body.supplier + '",goodsStatus= "' + req.body.status + '",typeName= "' + req.body.type + '" where goodsId = "' + req.body.id + '"'
  operation.update_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/goods/select", function (req, res) {
  var url = 'select * from goods where goodsName like "%' + req.body.id + '%" or typeName like "%' + req.body.id + '%"'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

module.exports = router