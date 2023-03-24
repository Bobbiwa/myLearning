const http = require('http')
const fs = require('fs')
const url = require('url')
const template = require('art-template')

const commentData = [
    {
        name: '张三1',
        message: 'The weather is beautiful today!',
        date: '2022-11-3'
    },
    {
        name: '张三2',
        message: 'The weather is beautiful today!',
        date: '2022-11-3'
    },
    {
        name: '张三3',
        message: 'The weather is beautiful today!',
        date: '2022-11-3'
    },
    {
        name: '张三4',
        message: 'The weather is beautiful today!',
        date: '2022-11-3'
    },
    {
        name: '张三5',
        message: 'The weather is beautiful today!',
        date: '2022-11-3'
    }
]

//*createServer里的函数 就是 绑定请求事件的函数
http
    .createServer((req, res) => {
        //*url.parse方法(参数二为true)可以解析url为一个url[Object]
        const parseObj = url.parse(req.url, true)
        const { pathname } = parseObj //*pathname为左边 (不包含查询字符串的路径<"?"之后的query参数>)
        const { query } = parseObj  //*query 为get参数[Object]

        if (pathname === '/') {
            fs.readFile('./views/index.html', (err, data) => {
                if (err) res.end('not found')
                else {
                    //模板引擎渲染data
                    data = template.render(data.toString(), {
                        comments: commentData
                    })
                    res.end(data)
                }
            })
        } else if (pathname === '/post') {
            fs.readFile('./views/post.html', (err, data) => {
                if (err) res.end('not found')
                else res.end(data)
            })
        }
        //处理public静态资源
        else if (pathname.indexOf('/public/') === 0) {
            console.log(pathname); //  /public/css/bootstrap.min.css
            fs.readFile('.' + pathname, (err, data) => {
                if (err) res.end('not found')
                else res.end(data)
            })
            //handle 表单提交参数
        } else if (pathname === '/submitComment') {
            const newData = { name: query.username, message: query.message, date: new Date() }
            commentData.unshift(newData)
            //服务器路由 重定向
            res.statusCode = 302   //* 一定要先给响应头设置302状态码，浏览器才会重新对Location字段的url发起新的请求
            res.setHeader('Location', '/')
            res.end()  // * 一定要结束响应！  要不然无法跳转

            //处理404未知url
        } else {
            fs.readFile('./views/404.html', (err, data) => {
                res.end(data)
            })
        }
    })
    .listen(3000, () => {
        console.log('server is running');
    })

/*
总结：
*url.parse方法(参数二为true)可以解析url为一个url[Object]
*[服务器]路由重定向：1.响应状态码置为“302”，响应头的Location字段置为跳转路径  （跳转记得还要res.end()）
*/ 