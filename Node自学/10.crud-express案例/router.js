const express = require('express')
const fs = require('fs')
const studentCURD = require('./utils/studentCURD')
const router = express.Router()

//主页
router.get('/', (req, res) => {
    studentCURD.findAll((err, data) => {
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
    studentCURD.save(req.body, (err) => {
        if (err) res.send('save err');
        else res.redirect('/')
    })
})

//跳转update页面
router.get('/student/edit', (req, res) => {
    const { id } = req.query
    studentCURD.findById(parseInt(id), (err, data) => {
        if (err) res.send(err);
        res.render('edit.art', {
            students: data
        })
    })
})
//submit update
router.post('/student/edit', (req, res) => {
    studentCURD.updateById(req.body,(err)=>{
        if(err) console.log(err);
    })
    res.redirect('/')
})


router.get('/student/delete', (req, res) => {
    const {id} = req.query
    studentCURD.delete(parseInt(id),(err)=>{
        if(err) res.send(err)
        res.redirect('/')
    })
})

module.exports = router