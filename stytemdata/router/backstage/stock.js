var express = require("express")
var router = express.Router()

var operation = require("./operation")

router.get("/stockcheck", function (req, res) {
  var url = 'select * from goods,stock where stock.goodsId = goods.goodsId'
  operation.select_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

router.post("/stockcheck/submit", function (req, res) {
  var id = req.body.stockinfo.stockId;
  var date = req.body.stockinfo.stockDate;
  var player = req.body.stockinfo.player;
  var stocklist = req.body.stocklist;
  var detail_url = 'insert into stockcheck values("' + id + '","' + date + '","' + player + '");';
  for (var i = 0; i < stocklist.length; i++) {
    detail_url += 'insert into stockcheckdetails(stoId,goodsId,trueNum) values("' + id + '","' + stocklist[i].goodsId + '","' + stocklist[i].stocktrueNume + '");'
  };
  operation.add_sql(detail_url, function (result) {
    res.send(result)
  });
})

router.get("/stockcheck/history", function (req, res) {
  var url = 'select * from stockcheck'
  operation.select_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

router.post("/stockcheck/history/details", function (req, res) {
  var id = req.body.id
  var url = 'select * from stockcheckdetails,goods where goods.goodsId = stockcheckdetails.goodsId and stockcheckdetails.stoId = "' + id + '"'
  operation.select_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

router.post("/stockwarn", function (req, res) {
  var num = req.body.num
  var url = 'select * from stock,goods where goods.goodsId = stock.goodsId and stock.stockNum < "' + num + '"'
  operation.select_sql(url, function (result) {
    res.send(result)
    res.end()
  })
})

module.exports = router