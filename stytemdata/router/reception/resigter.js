var express = require("express")
var router = express.Router()
var operation = require("./operation")

router.post("/resigter", function (req, res) {
    var username = req.body.user.username
    var pad = req.body.user.tel_pad
    var truename = req.body.info.truename
    var sex = req.body.info.sex
    var age = req.body.info.age
    var tel = req.body.info.tel
    var qq = req.body.info.qq
    var email = req.body.info.email
    var address = req.body.info.address
    var detaddress = req.body.info.detaddress

    var url = 'insert into user(username,userPad) values("' + username + '","' + pad + '");insert into customer(userName,custrueName,cusSex,cusAge,cusTel,cusQQ,cusEmail,cusAddress,cusdetAddress) values("' + username + '","' + truename + '","' + sex + '","' + age + '","' + tel + '","' + qq + '","' + email + '","' + address + '","' + detaddress + '");';
    operation.add_sql(url, function (result) {
        res.send(result)
    });
})



module.exports = router