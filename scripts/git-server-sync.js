const http = require('http');

const path = require('path')
const git = require('isomorphic-git')

const fs = require('fs')



http.createServer(function (req,res){
    // todo 与git远程仓库同步
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World\n');
}).listen(8888);
