var express = require("express")
var router = express.Router()
var operation = require("./operation")

router.post("/move", function (req, res) {
    switch (req.body.search) {
        case "Love":
            var url = 'select * from goods where typeName = "鲜花"';
            break;
        case "Friend":
            var url = 'select * from goods where typeName = "鲜花"';
            break;
        case "Basket":
            var url = 'select * from goods where typeName = "花篮"';
            break;
        case "Box":
            var url = 'select * from goods where typeName = "礼盒"';
            break;
        case "Cake":
            var url = 'select * from goods where typeName = "蛋糕"';
            break;
        case "Plant":
            var url = 'select * from goods where typeName = "绿植"';
            break;
        case "New":
            var url = 'select * from goods where typeName = "新品上架"';
            break;
        default:
            var url = 'select * from goods where goodsName like "%' + req.body.search + '%" or goodsMaster like "%' + req.body.search + '%"';
    }
    operation.select_sql(url, function (result) {
        res.send(result)
    })
})


module.exports = router