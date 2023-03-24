const express = require('express')
const fs = require('fs')
const Mongo = require('./student')
const router = express.Router()

//主页
router.get('/', (req, res) => {
    Mongo.find((err, data) => {
        if (err) res.send(err)
        res.render('index.art', {
            fruits: ['apple', 'banana', 'orange', 'peach'],
            students: data
        })
    })
})

//跳转添加学生页面
router.get('/student/new', (req, res) => {
    res.render('add.art')
})
//submit addStudent
router.post('/student/new', (req, res) => {
    const user = new Mongo(req.body)
    user.save()
        .then(() => {
            console.log('save success!');
            res.redirect('/')
        })
})

//跳转update页面
router.get('/student/edit', (req, res) => {
    const { id } = req.query

    Mongo.findById(id, (err, data) => {
        if (err) res.send(err);
        console.log(data);
        res.render('edit.art', {
            students: data
        })
    })
})
//submit update
router.post('/student/edit', (req, res) => {
    console.log(1111,req.body);
    Mongo.findByIdAndUpdate(req.body.id, req.body, (err) => {
        if (err) console.log(err);
    })
    res.redirect('/')
})


router.get('/student/delete', (req, res) => {
    const { id } = req.query
    Mongo.findByIdAndRemove(id, (err) => {
        if (err) res.send(err)
        res.redirect('/')
    })
})

module.exports = router