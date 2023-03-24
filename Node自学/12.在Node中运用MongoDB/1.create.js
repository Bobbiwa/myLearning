const mongoose = require('mongoose');

//1.连接数据库
mongoose.connect('mongodb://localhost/mydb');

//2.设计Schema
//设计表的文档(数据)结构
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

/**
 * 3.将文档结构发布为模型
 *   mongoose.model方法就是用来将一个架构发布为model
 *   第一个参数：传入一个大写单词表示数据库的名称
 *              mongoose会自动将大写名词的字符串Switch为小写复数的集合名词
 *              例如这里的 User 最终会转为 users 集合名称
 *   第二个参数：架构 Schema
 *   
 *   返回值：模型构造函数 (tip：“当我们有了这个模型构函数，就可以用它对User中的数据为所欲为啦！！”)
 */
const User = mongoose.model('User', userSchema); //发布文档模型


const user = new User({
    username: "admin1",
    password: "admin1",
    email: "admin@admin.com"
}) //插入数据

user.save()
    .then(() => console.log('okkkk')); //持久化保存



