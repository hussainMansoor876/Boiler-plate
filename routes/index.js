const express = require('express')
const router = express.Router()

router.use('/user', require('./auth'))

router.use('/post', require('./post'))

router.use('/get', require('./get'))

module.exports = router