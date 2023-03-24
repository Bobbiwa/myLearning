const student = require('./student')
const model = require('./student')

for (let i = 0; i < 9; i++) {
    new student({
        id: i,
        name: '张三',
        gender: 0,
        age: 16,
        hobby: '打豆豆，扣码码'
    }).save().then(()=>{console.log('success')})
}

