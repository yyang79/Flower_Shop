var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//跨域请求解决方案
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") res.sendStatus(200); /*让options请求快速返回*/
  else next();
});
/* backstage router */
var backstage = require("./router/backstage/backstage")
app.use(backstage)
/* reception router */
var reception = require("./router/reception/reception")
app.use(reception)

module.exports = app
app.listen(3000, function () {
  console.log("程序已运行。。。。")
  console.log("http://127.0.0.1:3000/")
})