const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mydb')

//注意：更新的话，schema不能少！！！
const Schema = mongoose.Schema
var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String
    }
});

const User = mongoose.model('User', userSchema); //发布文档模型

User.findOneAndUpdate({ username: '2222' }, { username: "admin1" }, {}, (err) => {
    if (err) console.log(err);
    console.log('更新成功');
})