const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mydb')

const User = mongoose.model('User', {})


//按条件删除
User.remove({username:'admin1'},(err)=>{
    if(err) console.log(err);
    console.log('删除成功');
})

// User.findOneAndUpdate({ username: 'admin' }, { username: "2222" }, {}, (err) => {
//     if (err) console.log(err);
//     console.log('更新成功');
// })