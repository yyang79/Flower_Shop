var express = require("express")
var router = express.Router()

var operation = require("./operation")

router.get("/echarts/stock", function (req, res) {
  var url = 'select * from stock,goods where stock.goodsId = goods.goodsId'
  operation.select_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

router.get("/echarts/purchase", function (req, res) {
  var url = 'select * from stock,goods where stock.goodsId = goods.goodsId'
  operation.select_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

router.get("/echarts/sale", function (req, res) {
  var url = 'select * from stock,goods where stock.goodsId = goods.goodsId'
  operation.select_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

router.get("/echarts/all", function (req, res) {
  var url = 'select * from stock,goods where stock.goodsId = goods.goodsId'
  operation.select_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

module.exports = router