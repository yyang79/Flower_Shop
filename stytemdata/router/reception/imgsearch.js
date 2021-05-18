let express = require('express');
var router = express.Router();
var formidable = require('formidable');
var path = require("path");
var fs = require('fs');

const search = require("../imagesearch");
const operation = require("./operation");



router.post('/search/img', (req, res) => {

    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = path.join(__dirname + "/../../assets/searchimg");
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.parse(req, function (err, fields, files) {
        fs.renameSync(files.file.path, form.uploadDir + "/" + files.file.name)
        var image = fs.readFileSync("assets/searchimg/" + files.file.name + "").toString("base64");
        search.searchimg(image, function (result) {
            var url = '';
            for (let i = 0; i < result.length; i++) {
                url += 'select * from goods where goodsUrl = "' + result[i].goodsUrl + '";'
            }
            operation.select_sql(url, function (result) {
                res.send(result)
            });
        })
        fs.unlinkSync("assets/searchimg/" + files.file.name + "");
    })
});


module.exports = router;