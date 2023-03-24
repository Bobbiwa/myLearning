let http = require('http')
let server = http.createServer()
//*当客户端发过来请求，服务器就会触发请求事件
server.on('request', (request, response) => {
    //*request.url可以拿到请求路径 | request.socket.remotePort | request.socket.remoteAddress
    console.log(request.socket.remoteAddress);
    if (request.url === '/') response.end('page admin')  //*原始写法：response.write('page admin') 向document写入字符串  |  response.end()告诉客户端响应结束
    if (request.url === '/login') response.end('page login')
    if (request.url === '/category') response.end('page category')

    const products = [
        {
            id: 1,
            name: 'iphone 12',
            price: 5000
        },
        {
            id: 2,
            name: 'HUAWEI',
            price: 4000
        },
        {
            id: 3,
            name: '小米',
            price: 3000
        }
    ]
    if (request.url === '/products') response.end(JSON.stringify(products))  //*服务器只能响应strign和buffer
})
server.listen(3000, () => {
    console.log('server is running');
})


/*
*总结：
*1.requst事件：当客户端发来请求时触发。
*  该事件的回调参数有request（request.url可获得请求路径）和response（response.end()方法可以给document写入字符串）
*2.服务器只能响应string和buffer。
*
*/ 

