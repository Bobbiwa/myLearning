const express = require('express')
const User = require('./models/user')

const router = express.Router()

//主页
router.get('/', (req, res) => {
    res.render('index.html')
})

//login page
router.get('/login', (req, res) => {
    res.render('login.html')
})

//login submit
router.post('/login', (req, res) => {
    console.log(req.body);
})

//logout
router.get('/logout', (req, res) => {
    console.log('退出登录');
})

//register page
router.get('/register', (req, res) => {
    res.render('register.html')
})

//register submit
router.post('/register', (req, res) => {
    //1.获取表单数据
    const { email, nickname } = req.body
    //2.操作数据库
    //      判断用户是否存在
    User.findOne({ $or: [{ email }, { nickname }] }, (err, data) => {
        if (err) {
            return res.status(500).json({  //express提供一个json方法，它自动帮你把对象转JSON发给浏览器
                success: false,
                message: "Server Error"
            })
        }
        if (data) { //      若已存在，不允许注册
            return res.status(200).json({
                success: false,
                message: "email or nickname already exist"
            })
        } else {    //      若不存在，允许注册
            new User(req.body).save((err, data) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Server Error"
                    })
                } else {
                    return res.status(200).json({
                        success: true,
                        message: "OK"
                    })
                }
            })
        }
    })
    //3.发送响应
})

module.exports = router