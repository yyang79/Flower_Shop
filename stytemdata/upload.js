var https = require('https');
var qs = require('querystring');

const param = qs.stringify({
    'grant_type': 'client_credentials',
    'client_id': 'fNQTQh9OQTdGqWQDUGO061fr',
    'client_secret': 'sRs7GYS6EvY6amgDifp3qvNkt6kBrGOT'
});

https.get(
    {
        hostname: 'aip.baidubce.com',
        path: '/oauth/2.0/token?' + param,
        agent: false
    },
    function (res) {
        // 在标准输出中查看运行结果
        res.pipe(process.stdout);
    }
);