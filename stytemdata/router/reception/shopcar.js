var express = require("express")
var router = express.Router()
var operation = require("./operation")


router.get("/commend", function (req, res) {
    var url = 'select * from goods where typeName like "鲜花"';
    operation.select_sql(url, function (result) {
        res.send(result)
    })
})

router.post("/setorder", function (req, res) {
    var url = 'insert into orderlist(orderId,userName,orderPrice,orderDate,orderDtatus,orderRemark) values("' + req.body.id + '","' + req.body.name + '","' + req.body.price + '","' + req.body.time + '","' + req.body.status + '","' + req.body.remark + '");';
    for (let i = 0; i < req.body.goodslist.length; i++) {
        url += 'insert into orderdetails(orderId,goodsId,orderNum) values("' + req.body.id + '","' + req.body.goodslist[i].id + '","' + req.body.goodslist[0].num + '");'
    };
    operation.add_sql(url, function (result) {
        res.send(result)
    });
})

router.post("/getorder", function (req, res) {
    var url = 'select * from orderlist where userName = "' + req.body.name + '";select * from goods,orderdetails where goods.goodsId = orderdetails.goodsId;';
    operation.select_sql(url, function (result) {
        for (var i = 0; i < result[0].length; i++) {
            result[0][i].chrildList = [];
            for (var j = 0; j < result[1].length; j++) {
                if (result[0][i].orderId == result[1][j].orderId) {
                    result[0][i].chrildList.push(result[1][j])
                }
            }
        }
        res.send(result[0])
    });
})

router.post("/order/get",function (req,res) {
    var url = 'update orderlist set orderDtatus = "已收货" where orderId = "'+req.body.id+'"'
    operation.update_sql(url, function (result) {
        res.send(result)
    });
  })

  router.post("/personal/infomodify",function (req,res) {
    var url = 'update customer set custrueName = "'+req.body.info.custrueName+'",cusSex = "'+req.body.info.cusSex+'",cusAge = "'+req.body.info.cusAge+'",cusTel = "'+req.body.info.cusTel+'",cusQQ = "'+req.body.info.cusQQ+'",cusEmail = "'+req.body.info.cusEmail+'" where userName = "'+req.body.info.userName+'"'
    operation.update_sql(url, function (result) {
        res.send(result)
    });
  })

  router.post("/personal/padmodify",function (req,res) {
    var url = 'update user set userPad = "'+req.body.pad+'" where userName = "'+req.body.name+'"'
    operation.update_sql(url, function (result) {
        res.send(result)
    });
  })

module.exports = router