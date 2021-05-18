var express = require("express")
var router = express.Router()

var operation = require("./operation")
var send = require("../sendmessage")

router.post("/login", function (req, res) {
  var user = req.body.user
  var pad = req.body.pad
  var type = req.body.type
  if (type == "admin") {
    url = 'select adminPad from admin where adminName = "' + user + '"'
  } else if (type == "user") {
    url = 'select * from user,customer where user.userName = customer.userName and user.userName = "' + user + '"'
  }
  operation.login_sql(url, pad, function (result) {
    res.send(result)
  })
})

router.post("/send/message", function (req, res) {
  send.sendmessage(req.body.email, function (result) {
    res.send(result)
  })
})

var { randomCode, sendCode } = require("../sendtel")
router.post("/send/tel", (req, res) => {
  let code = randomCode(6);//生成6位数字随机验证码
  sendCode(req.body.tel, code, function (success) {
    if (success) {
      var list = { telcode: code, message: "短信验证码已发送" }
      res.send(list);
    } else {
      res.send("短信验证码发送失败");
    }
  })
})


module.exports = router