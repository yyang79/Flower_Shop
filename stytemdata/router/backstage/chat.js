var express = require("express")
var router = express.Router()

var operation = require("./operation")

router.get("/chat", function (req, res) {
  var url = 'select * from chat'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/chat/user", function (req, res) {
  var user = req.body.user;
  var url = 'select * from chat where receiverName = "'+user+'" or sendName = "'+user+'"'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
})

router.post("/chat/send", function (req, res) {
  var sendName = req.body.sendName;
  var receiverName = req.body.receiverName;
  var sendTime = req.body.sendTime;
  var sendContent = req.body.sendContent;
  var url = 'insert into chat(sendName,receiverName,sendTime,sendContent) values("' + sendName + '","' + receiverName + '","' + sendTime + '","' + sendContent + '")'
  operation.add_sql(url, function (result) {
    res.send(result)
  })
})

module.exports = router