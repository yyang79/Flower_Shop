var express = require("express")
var router = express.Router()
var formidable = require('formidable');

var path = require("path");
var fs = require("fs");

var operation = require("./operation")

router.post("/upload", function (req, res) {
  var form = new formidable.IncomingForm();
  form.encoding = 'utf-8';
  form.uploadDir = path.join(__dirname + "/../../assets/images");
  form.keepExtensions = true; //保留后缀
  form.maxFieldsSize = 2 * 1024 * 1024;
  form.parse(req, function (err, fields, files) {
    fs.renameSync(files.file.path, form.uploadDir + "/" + files.file.name)
  }) 
})

router.get("/getimg", function (req, res) {
  var url = 'select * from test'
  operation.select_sql(url, function (result) {
    res.send(result)
  })
});

module.exports = router