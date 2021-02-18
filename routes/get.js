const express = require('express')
const router = express.Router()
const { verifyEmail, verifyToken } = require('../controllers/get')

router.get('/verifyemail/:token', verifyEmail)

router.get('/verifytoken/:token', verifyToken)

module.exports = router