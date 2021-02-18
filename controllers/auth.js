const bcrypt = require('bcryptjs')
const jwt = require('jwt-simple')
const moment = require('moment')
const { Users } = require('../model')
const { emailText, forgotEmail } = require('../helpers')
const secret = 'PakistanZindabad'

const signUp = (req, res) => {
    let { body } = req
    const { origin } = req.headers
    const { firstName, lastName } = body
    Users.findOne({ email: body.email, verify: true })
        .then((response) => {
            if (response) {
                return res.send({ success: false, message: 'Email already in use!' })
            }

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(body.password, salt, (err, hash) => {
                    if (err) {
                        return res.send({ success: false })
                    }
                    body.password = hash
                    body.firstName = `${firstName.charAt(0).toUpperCase()}${firstName.slice(1).toLowerCase()}`
                    body.lastName = `${lastName.charAt(0).toUpperCase()}${lastName.slice(1).toLowerCase()}`
                    let user = new Users(body)

                    user.token = jwt.encode({
                        iss: user.id,
                        email: user.email,
                        exp: moment().add(2, 'days').valueOf()
                    }, secret)
                    user.save()
                        .then(() => {
                            emailText(user, origin)
                            user.password = undefined
                            return res.send({ success: true, user })
                        })
                        .catch((e) => {
                            res.send({ success: false, message: 'Something Went Wrong!' })
                        })
                })
            })
        })
}

const logIn = (req, res) => {
    const { body } = req
    Users.findOne({ email: body.email, loginType: 'auth', verify: true })
        .then((response) => {
            if (response) {
                return bcrypt.compare(body.password, response.password, (err, result) => {
                    if (err || !result) {
                        return res.send({ success: false, message: 'Oops, incorrect password!' })
                    }

                    Users.findById({ _id: response._id }, { password: 0 })
                        .then((user) => {
                            return res.send({ success: true, user })
                        })
                        .catch((e) => res.send({ success: false, message: 'Oops Something Went Wrong!' }))
                })
            }
            return res.send({ success: false, message: 'Oops, incorrect Email!' })
        })
        .catch((e) => res.send({ success: false, message: 'Oops, Incorrect Email!' }))
}

const socialLogin = (req, res) => {
    const { body } = req
    Users.findOne({ email: body.email })
        .then((response) => {
            if (!response) {
                body.verify = true
                let user = new Users(body)
                user.save()
                    .then(() => {
                        return res.send({ success: true, user })
                    })
                    .catch((e) => res.send({ success: false, message: 'Something Went Wrong!' }))
            }
            else {
                return res.send({ success: true, user: response, })
            }
        })
        .catch((e) => {
            return res.send({ success: false, message: 'Something Went Wrong!' })
        })
}

const forgotPass = (req, res) => {
    const { body } = req
    const { origin } = req.headers

    Users.findOne(body, (err, user) => {
        if (err || !user) {
            return res.send({ success: false, message: 'Oops, No email found!' })
        }
        const token = jwt.encode({
            iss: user.id,
            email: user.email,
            exp: moment().add(2, 'days').valueOf()
        }, secret)
        Users.findOneAndUpdate(body, { token }, { new: true }, (err, user) => {
            if (err || !user) {
                return res.send({ success: false, message: 'Oops, Something Went Wrong!' })
            }
            forgotEmail(user, origin)
            return res.send({ success: true, message: 'We have sent you a verification code!' })
        })
    })
}

const verifyCode = (req, res) => {
    const { body } = req

    Users.findOneAndUpdate(body, { $unset: { otp: 1 } }, { fields: { password: 0, otp: 0 } }, (err, user) => {
        if (err || !user) {
            return res.send({ success: false, message: 'Oops, incorrect code!' })
        }

        return res.send({ success: true, message: 'Successfully verified, please input your new Password' })
    })
}

const updatePass = (req, res) => {
    let { email, password } = req.body

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                return res.send({ success: false, message: 'Something went wrong, please try again!!' })
            }

            password = hash

            Users.findOneAndUpdate({ email }, { password, $unset: { token: '' } }, { new: true, fields: { password: 0, otp: 0 } }, (err, user) => {
                if (err || !user) {
                    return res.send({ success: false, message: 'Something went wrong, please try again!!' })
                }

                return res.send({ success: true, user })
            })
        })
    })
}

const changePassword = (req, res) => {
    let { email, password, newPassword } = req.body

    Users.findOne({ email, loginType: 'auth', verify: true })
        .then((response) => {
            if (response) {
                return bcrypt.compare(password, response.password, (err, result) => {
                    if (err || !result) {
                        return res.send({ success: false, message: 'Oops, incorrect password!' })
                    }

                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newPassword, salt, (err, hash) => {
                            if (err) {
                                return res.send({ success: false, message: 'Something went wrong, please try again!!' })
                            }
                            Users.findOneAndUpdate({ email }, { password: hash }, { new: true, fields: { password: 0, otp: 0 } }, (err, user) => {
                                if (err || !user) {
                                    return res.send({ success: false, message: 'Something went wrong, please try again!!' })
                                }

                                return res.send({ success: true, user })
                            })
                        })
                    })
                })
            }
            return res.send({ success: false, message: 'Someting Went Wrong!' })
        })
        .catch((err) => res.send({ success: false, message: 'Someting Went Wrong!' }))
}

module.exports = {
    signUp,
    logIn,
    socialLogin,
    forgotPass,
    verifyCode,
    updatePass,
    changePassword
}