const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mydb')

const User = mongoose.model('User',{}); //发布文档模型

/*findAll
User.find((err,data)=>{ 
    if(err) console.log(err);
    console.log(data);
})
*/

// 条件查询 (username 为admin)
User.find({username:"admin"},(err,data)=>{
    console.log(data);
})

//find返回数组；findOne返回一个对象
