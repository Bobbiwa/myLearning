const http = require('http')
const fs = require('fs')
const template = require('art-template')

const server = http.createServer()

const wwwDir = 'C:/Users/Damon_Du/Desktop/Node学习/www'
server.on('request', (req, res) => {
    //若url为"/"，展示网页文件目录
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        fs.readFile('../resource/fileMenu.html', (err, data) => {
            if (err) res.end('err')
            else {
                //* fs.readdir方法读取参数1的目录，filesArr为该目录下的所有文件名 ：Array
                fs.readdir(wwwDir,(err,filesArr)=>{
                    if(err) res.end('cant find dir')
                    else {
                        const htmlString = template.render(data.toString(),{
                            files:filesArr
                        })
                        res.end(htmlString)
                    }
                })
            }
        })
    } else {
        fs.readFile(wwwDir + req.url, (err, data) => {
            if (err) res.end('404')
            else res.end(data)
        })
    }
})
server.listen(3000, () => {
    console.log('server is running');
})

/*
*fs.readdir方法读取参数1的目录，filesArr为该目录下的所有文件名 ：Array
*/ 