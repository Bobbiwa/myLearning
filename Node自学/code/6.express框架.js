const express = require('express')
//const http = require('http')
const app = express()
//const server = http.createServer()

app.get('/', (req, res) => { //* 当服务器收到get请求'/'时，执行此回调
    res.send('hello express111')
})
//server.on('request',(req,res)=>{
//    if(req.url === '/') res.end('admin')
//})
app.listen(3000, () => {
    console.log('server is running');
})
//server.listen(3000,()=>{
//  console.log('server is running');
//})


