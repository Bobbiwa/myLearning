const express = require('express')
const app = express()

//公开静态资源，
//“/public”: 是别名，
//“../resource”: 公开的文件路径
app.use('/public',express.static('../resource'))
app.listen(3000,()=>{
    console.log('server is running');
})