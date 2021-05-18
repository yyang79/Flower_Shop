var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yangyin.",
    port: 3306,
    database: "flower system",
    multipleStatements: true,
})

connection.connect();

function add_sql(url, callback) {
    connection.query(url, function (err, data) {
        if (err) {
            callback("添加失败")
        }
        callback("添加成功")
    })
}
function delete_sql(url, callback) {
    connection.query(url, function (err, data) {
        if (err) {
            callback("删除失败")
        }
        callback("删除成功")
    })
}
function update_sql(url, callback) {
    connection.query(url, function (err, data) {
        if (err) {
            callback("更新失败")
        }
        callback("更新成功")
    })
}
function select_sql(url, callback) {
    connection.query(url, function (err, data) {
        if (err) {
            callback("查询失败")
        }
        callback(data)
    })
}
function login_sql(url, pad, type, callback) {
    connection.query(url, function (err, data) {
        if (err) {
            console.log(err)
        }
        else {
            if (data == '') {
                callback("该用户不存在")
            }
            else if (pad != data[0].password) {
                callback("密码不正确")
            }
            else if (type != data[0].type) {
                callback("用户身份错误")
            }
            else if (pad == data[0].pad || type == data[0].type) {
                callback("验证通过")
            }
        }
    })
}

module.exports = { add_sql, delete_sql, update_sql, select_sql, login_sql }