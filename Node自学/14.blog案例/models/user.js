const mongoose = require('mongoose')

//连接数据库
mongoose.connect('mongodb://localhost/blog')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_time: {
        type: Date,
        //注意： 这里不要写Date.now() 因为会立刻执行
        //这里直接给一个Date.now方法
        //当你去 new Model 的时候，如果你没有传递created_time,则mongoose就会调用Date.now()
        default: Date.now
    },
    last_modify_time: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        default: '/public/images/head_icon.jpg'
    },
    bio: {
        type: String,
        default: ''
    },
    gender: {
        type: Number,
        //-1 保密
        //0  女
        //1  男
        enum: [-1, 0, 1],
        default: -1
    },
    birthday: {
        type: Date
    },
    status: {
        type: Number,
        //0 没有权限限制
        //1 不可评论
        //2 不可登录
        enum: [0, 1, 2],
        default: 0
    }
})

module.exports = mongoose.model('User', userSchema)