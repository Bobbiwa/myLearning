const http = require('http')
const fs = require('fs')
const template = require('art-template')

const server = http.createServer()

server.on('request', (req, res) => {
    if (req.url === '/template') {
        fs.readFile('../resource/template.html', (err, data) => {
            if (err) res.end('err')
            else {
                //由于readFile读的文件返回的data为二进制数据，所以需要toString
                const ret = template.render(data.toString(), {  //template.render方法解释：参数二(数据)渲染进参数一(模板)
                    name: "古天乐"
                })
                res.end(ret)
            }
        })
    }
})

server.listen(3000, () => {
    console.log('server is running');
})