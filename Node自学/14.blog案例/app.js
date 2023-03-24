const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const router = require('./router')

const app = express()

//开放public,node_modules
app.use('/public',express.static(path.join(__dirname,'./public')))
app.use('/node_modules',express.static(path.join(__dirname,'./node_modules')))

//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//配置模板引擎
app.engine('html',require('express-art-template'))

//配置路由
app.use(router)

app.listen(3000,()=>{
    console.log('port is 3000');
})