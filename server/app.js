 let http = require('http')
 let fs = require('fs')

// 创建一个服务器
 http.createServer(function(req,res){
    // 设置响应头
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    // 服务器响应数据接收完成
    console.log('接收到来自'+ req.url +'的访问')
    res.end('接收到来自'+ req.url +'的访问')
 }).listen(3000,'127.0.0.1')
