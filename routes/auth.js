const express = require('express')
const router = express.Router()
const { signUp, logIn, socialLogin, forgotPass, verifyCode, updatePass, changePassword } = require('../controllers/auth')

router.post('/signup', signUp)

router.post('/login', logIn)

router.post('/social-login', socialLogin)

router.post('/forgot-password', forgotPass)

router.post('/verify-code', verifyCode)

router.post('/update-password', updatePass)

router.post('/change-password', changePassword)


module.exports = router