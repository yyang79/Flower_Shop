var express = require("express")
var router = express.Router()
var operation = require("./operation")


router.post("/detailpage", function (req, res) {
    var url = 'select * from goods where goodsName = "' + req.body.goodsName + '"'
    operation.select_sql(url, function (result) {
        res.send(result)
    })
})

router.post("/comment", function (req, res) {
    var url = 'select customer.userUrl,customer.userName,goods.goodsName,comment.score,comment.comment,comment.comUrl,comment.comTime from comment,goods,customer where comment.goodsName = goods.goodsName and comment.userName=customer.userName and goods.goodsName = "' + req.body.goodsName + '"'
    operation.select_sql(url, function (result) {
        res.send(result)
    })
})

module.exports = router