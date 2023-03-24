
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')

const app = express()

//开放node_modules和public
app.use('/node_modules', express.static('./node_modules'))
app.use('/public', express.static('./public'))

//配置art-template、body-parser （要在配置路由之前）
app.engine('art', require('express-art-template'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//配置路由
app.use(router)

app.listen(3000, () => {
    console.log('port is 3000');
})

//安装art-template  express-art-template