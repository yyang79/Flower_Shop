var nodemailer = require('nodemailer');
function sendmessage(toemail,callback) {
  var transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
      user: '1527393040@qq.com',
      pass: 'xqvwetqwqpnnijfh' //授权码,通过QQ获取
    }
  });
  function randomCode(length) {
    var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var result = ""; //统一改名: alt + shift + R
    for (var i = 0; i < length; i++) {
      var index = Math.ceil(Math.random() * 9);
      result += chars[index];
    }
    return result;
  }
  const code = randomCode(6);
  var mailOptions = {
    from: '1527393040@qq.com', // 发送者
    to: toemail, // 接受者,可以同时发送多个,以逗号隔开
    subject: '花无缺', // 标题
    //text: 'Hello world', // 文本
    html: '<span>【花无缺】您的验证码为 "' + code + '" ，验证码仅在 3 分钟内有效。</span>'
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }
    var list = { code: code, message: '发送成功' }
    callback(list)
  });
}
module.exports = { sendmessage }