const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mydb')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    age: {
        type: Number,
    },
    hobby: {
        type: String,
    }
})

//导出模型对象，谁拿到它就能操作数据库了
module.exports = mongoose.model('Student', studentSchema)