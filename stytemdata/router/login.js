var express = require("express")
var router = express.Router()
var operation = require("./reception/operation")
var func_a = require("../index")

router.get("/recommend/test", function (req, res) {
    var url = 'select userName,goodsId from orderlist,saledetails,historyorder where orderlist.orderId = historyorder.orderId and historyorder.saleId = saledetails.saleId'
    operation.select_sql(url, function (result) {
        var data = [];
        for (let i = 0; i < result.length; i++) {
            data.push({ userId: result[i].userName, goodsId: result[i].goodsId })
        }
        const recommendGoodsService = new func_a.RecommendGoodsService(data,"测试用户4",10) // 生成个性化推荐
        const results = recommendGoodsService.start()
        result = results.slice(0, 10)

        var select_url = ''
        for (let i = 0; i < result.length; i++) {
            select_url += 'select * from goods where goodsId = "' + result[i] + '";'
        }
        operation.select_sql(select_url, function (result) {
            res.send(result)
        });

    });
})

module.exports = router