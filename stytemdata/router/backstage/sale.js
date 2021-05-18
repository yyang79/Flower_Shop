var express = require("express")
var router = express.Router()

var operation = require("./operation")

router.get("/sale", function (req, res) {
  var url = 'select * from goods,stock where goods.goodsId = stock.goodsId'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/sale/submit", function (req, res) {
  var id = req.body.id;
  var date = req.body.date;
  var player = req.body.player;
  var goodslist = req.body.goodslist;
  var detail_url = 'insert into sale values("' + id + '","' + date + '","' + player + '","商品已出库");';
  for (var i = 0; i < goodslist.length; i++) {
    detail_url += 'insert into saledetails(saleId,goodsId,saleNum) values("' + id + '","' + goodslist[i].goodsId + '",' + parseInt(goodslist[i].num) + ');update stock set stockNum =  stockNum - ' + goodslist[i].num + ',stocktrueNum =  stocktrueNum - ' + goodslist[i].num + ' where goodsId = "' + goodslist[i].goodsId + '";'
  };
  operation.add_sql(detail_url, function (result) {
    res.send(result)
  });
})

router.get("/sale/history", function (req, res) {
  var url = 'select * from sale'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/sale/history/detail", function (req, res) {
  var url = 'select * from saledetails,goods where saledetails.goodsId = goods.goodsId and saledetails.saleId = "'+req.body.id+'"'
  operation.select_sql(url, function (result) {
    console.log(result)
    res.send(result)
  })
})

router.get("/order", function (req, res) {
  var url = 'select * from orderlist'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/order/detail", function (req, res) {
  var url = 'select * from orderdetails,goods where orderdetails.orderId = "' + req.body.id + '" and orderdetails.goodsId = goods.goodsId'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/order/status", function (req, res) {
  var url = 'update orderlist set orderDtatus = "待收货" where orderId = "' + req.body.id + '";'
  url += 'insert into historyorder(orderId,saleId) values("'+req.body.id+'","'+req.body.saleid+'");'
  operation.update_sql(url, function (result) {
    res.send(result)
  })
})

router.get("/order/history", function (req, res) {
  var url = 'select * from historyorder'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

module.exports = router