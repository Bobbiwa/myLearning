const http = require('http')
const fs = require('fs')
const server = http.createServer()
server.on('request', (req, res) => {
    //text/plain 普通字符串
    if (req.url === '/plain') {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8') //在响应头加Content-Type字段
        res.end('我只是plain文本,我不是乱码')
    }
    //text/html  html页面
    if (req.url === '/html') {
        fs.readFile('./resource/index.html', (err, data) => {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end(err)
            }
            if (data) {
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end(data)
            }
        })
    }
    //image/jpeg 图片页面
    if (req.url === '/img') {
        fs.readFile('./resource/img.jpg', (err, data) => {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end(err)
            }
            if (data) {
                res.setHeader('Content-Type', 'image/jpeg')  //由于只是响应图片，所以不需要加文字编码格式
                res.end(data)
            }
        })
    }
})
server.listen(3000, () => {
    console.log('server is running');
})

/*
*由于服务器默认发送的utf-8编码内容。国内操作系统的浏览器解析的方式gbk
*解决方式：在响应头加Content-Type字段
*/
