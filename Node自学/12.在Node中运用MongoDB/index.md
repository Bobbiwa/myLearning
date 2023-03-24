# 在Node中如何操作MongoDB

## 方法一：使用官方的mongodb包来操作
> [mongodb包](https://github.com/mongodb/node-mongodb-native)

## 方法二：使用第三方mongoose来操作MongoDB数据库
> 第三方包：`mongoose`基于MongoDB官方的mongodb包再一次做了封装。
> [mongoose官网](http://www.mongoosejs.net/)



```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test'); //连接数据库

const Cat = mongoose.model('Cat', { name: String }); //将文档结构发布为模型

const kitty = new Cat({ name: 'Zildjian' }); //插入数据
kitty.save().then(() => console.log('meow')); //持久化保存
```

