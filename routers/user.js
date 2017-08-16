var express = require('express')
var router = express.Router()

var models =  require('../models')

router.get('/', (req, res)=>{
  res.render('user')
})

router.get('/add', (req, res)=>{
  res.render('addUser')
})
module.exports = router
