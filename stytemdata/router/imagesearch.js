var AipImageSearchClient = require("baidu-aip-sdk").imageSearch;

// 设置APPID/AK/SK
var APP_ID = "24004811";
var API_KEY = "fNQTQh9OQTdGqWQDUGO061fr";
var SECRET_KEY = "sRs7GYS6EvY6amgDifp3qvNkt6kBrGOT";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipImageSearchClient(APP_ID, API_KEY, SECRET_KEY);


function uploadimg(img, name, callback) {
    // 调用相似图检索—入库, 图片参数为本地图片
    client.similarAdd(img, name).then(function (result) {
        callback("上传成功")
        console.log(JSON.stringify(result));
    }).catch(function (err) {
        // 如果发生网络错误
        console.log(err);
        callback("网络错误，上传失败")
    });
}

function searchimg(img, callback) {
    // 调用相似图检索—检索, 图片参数为本地图片
    client.similarSearch(img).then(function (res) {
        var list = [];
        for (let i = 0; i < res.result.length; i++) {
            if (res.result[i].score >= 0.8) {
                list.push({ goodsUrl: res.result[i].brief })
            }
        }
        callback(list)
    }).catch(function (err) {
        // 如果发生网络错误
        console.log(err);
    });
}

module.exports = { uploadimg, searchimg }
