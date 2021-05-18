var express = require("express")
var router = express.Router()
var operation = require("./operation")

router.get("/getrecommend", function (req, res) {
    var url = 'select * from customer,recommend where customer.userName = recommend.userName';
    operation.select_sql(url, function (result) {
        res.send(result)
    });
})

router.post("/submit/recommend", function (req, res) {
    var url = 'insert into recommend(userName,time,recommend) values("' + req.body.name + '","' + req.body.time + '","' + req.body.recommend + '")';
    operation.select_sql(url, function (result) {
        res.send(result)
    });
})

router.post("/delrecommend", function (req, res) {
    var url = `delete from recommend where id = ${req.body.id}`
    operation.delete_sql(url, function (result) {
        res.send(result)
    });
})


module.exports = router