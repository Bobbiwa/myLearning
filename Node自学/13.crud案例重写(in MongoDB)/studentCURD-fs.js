const fs = require('fs')
const dbPath = './db.json'

exports.findAll = (callback) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) callback(err)
        callback(null, JSON.parse(data).students)
    })
}

exports.save = (addData, callback) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) callback(err)
        //读到数据
        const studentsArr = JSON.parse(data).students
        addData.id = studentsArr[studentsArr.length - 1].id + 1
        //添加数据
        studentsArr.unshift(addData)
        const fileData = JSON.stringify({ students: studentsArr })
        //写入数据
        fs.writeFile(dbPath, fileData, (err) => {
            if (err) callback('写入失败');
            callback(null)
        })
    })
}

exports.findById = (id, callback) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) callback(err)
        const studentsArr = JSON.parse(data).students

        //写到这里了 根据id找到studentArr对应的
        const ret = studentsArr.find((item) => {
            return item.id === id
        })
        callback(null, ret)
    })
}


exports.updateById = (body, callback) => {
    body.id = parseInt(body.id) //因为请求体的id是string
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) callback(err);
        const fileData = JSON.parse(data).students
        const newFileData = fileData.map((item) => {
            if (item.id === body.id) {
                return item = body
            }
            return item
        })
        const string = JSON.stringify({ students: newFileData })
        fs.writeFile(dbPath, string, (err) => {
            if (err) callback(err)
            callback(null)
        })
    })
}

exports.delete = (id, callback) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) callback(err)
        const fileData = JSON.parse(data).students
        const newFileData = fileData.filter((item) => {
            if (item.id !== id) {
                return item
            }
        })
        const string = JSON.stringify({ students: newFileData })
        fs.writeFile(dbPath, string, (err) => {
            if (err) callback(err)
            callback(null)
        })
    })
}