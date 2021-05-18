var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yangyin.",
    port: 3306,
    database: "flower system",
    multipleStatements: true
})

connection.connect();

function add_sql(url, callback) {
    connection.query(url, function (err) {
        if (err) {
            return callback("添加失败")
        }
        callback("添加成功")
    })
}
function delete_sql(url, callback) {
    connection.query(url, function (err) {
        if (err) {
            return callback("删除失败")
        }
        callback("删除成功")
    })
}
function update_sql(url, callback) {
    connection.query(url, function (err) {
        if (err) {
            return callback("更新失败")
        }
        callback("更新成功")
    })
}
function select_sql(url, callback) {
    connection.query(url, function (err, data) {
        if (err) {
            return callback("查询失败")
        }
        callback(data)
    })
}
function login_sql(url, pad, callback) {
    connection.query(url, function (err, data) {
        if (err) {
            return console.log(err)
        }
        else {
            if (pad == data[0].adminPad) {
                callback("验证通过")
            } else if (pad == data[0].userPad) {
                data.push({ message: "验证通过" })
                callback(data)
            }
        }
    })
}

module.exports = { add_sql, delete_sql, update_sql, select_sql, login_sql }