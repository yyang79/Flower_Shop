var express = require("express")
var router = express.Router()

var operation = require("./operation")

router.get("/purchase", function (req, res) {
  var url = 'select * from goods,stock where goods.goodsId = stock.goodsId'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/purchase/submit", function (req, res) {
  var id = req.body.id;
  var date = req.body.date;
  var player = req.body.player;
  var goodslist = req.body.goodslist;
 console.log(goodslist)
  var detail_url = 'insert into purchase values("' + id + '","' + date + '","' + player + '","未审核");';
  for (var i = 0; i < goodslist.length; i++) {
    detail_url += 'insert into purchasedetails(purId,goodsId,purNum) values("' + id + '","' + goodslist[i].goodsId + '","' + goodslist[i].num + '");update stock set stockNum =  "' + goodslist[i].goodsNum + '",stocktrueNum =  "' + goodslist[i].goodsNum + '" where goodsId = "' + goodslist[i].goodsId + '";'
  };

  operation.add_sql(detail_url, function (result) {
    console.log(result)
    res.send(result)
  });
})

router.get("/purchase/history", function (req, res) {
  var url = 'select * from purchase'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/purchase/history/detail", function (req, res) {
  var url = 'select * from purchasedetails,goods where purchasedetails.goodsId = goods.goodsId'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

module.exports = router