// 引入Node.js 自带的 http 模块，并且把它赋值给 http 变量
const http = require('http');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const exec = require('child_process').exec;
const { ZEvent } = require('zevent');
const { resolve } = require('path');

let event = new ZEvent();
// 创建createServer方法用于接受http客户端请求及返回响应的http服务器程序
http.createServer(function (req,res){

    event.send('sync_event'); 
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World');

}).listen(8888);

event.on("sync_event", ()=>{
    exec('cd ../source/_posts');
    exec('git pull origin main');
});