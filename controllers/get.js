const jwt = require('jwt-simple')
const { Users } = require('../model')
const moment = require('moment')
const { sgMail } = require('../config')
const secret = 'PakistanZindabad'

const verifyEmail = (req, res) => {
    const { token } = req.params
    const { origin } = req.headers
    Users.findOne({ token: token }, (err, user) => {
        if (!user || err) {
            return res.send({ success: false, message: 'Sorry, Unable to verify your email. Either your link has expired or you have provided incorrect link' })
        }

        let decoded = jwt.decode(token, secret)
        if (user.verify) {
            return res.send({ success: false, message: 'Email Already Verified!' })
        }
        else if (decoded.exp >= moment().valueOf()) {
            Users.findByIdAndUpdate({ _id: user._id }, { $set: { verify: true }, $unset: { token: '' } }, { new: true, fields: { password: 0 } }, (error, result) => {
                if (error) {
                    return res.send({ success: false, message: 'Sorry, Unable to verify your email. Your link has either expired or become invalid. Request another link' })
                }

                return res.send({ success: true, message: 'Successfully verified your Account you can Login Now', user: result })
            })
        }
        else {
            decoded.exp = moment().add(2, 'days').valueOf()
            const updatedToken = jwt.encode(decoded, secret)
            Users.findByIdAndUpdate({ _id: user._id }, { $set: { token: updatedToken } }, { new: true }, (err, user) => {
                const msg = {
                    to: user.email,
                    from: 'mansoor.hussain@mach3bi.com',
                    subject: 'Verify Your Email',
                    text: `Hello ${user.firstName},
                        <br/>
                        <br/>
                        To complete your signup to Sureter, Please verify your email by clicking the link below:
                        <br />
                        <br />
                        ${origin}/emailverification/${user.token}
                        <br />
                        <br />
                        Alternatively, you can copy the link to your browser's address bar.
                        <br />
                        <br />
                        If you don't use this link within 2 days, the link will be expired.
                        Best regards,
                        <br/>
                        The Chimaera Test team
                        `,
                    html: `Hello ${user.firstName},
                        <br/>
                        <br/>
                        To complete your signup to Chimaera, Please verify your email by clicking the link below:
                        <br />
                        <br />
                        ${origin}/emailverification/${user.token}
                        <br />
                        <br />
                        Alternatively, you can copy the link to your browser's address bar.
                        <br />
                        <br />
                        If you don't use this link within 2 days, the link will be expired.
                        Best regards,
                        <br/>
                        The Chimaera Test team
                        `
                }
                sgMail.send(msg)
                return res.send({ success: false, message: 'Sorry, your verification link has expired. We have sent another verification link to your email. Please check your inbox!' })

            })
        }
    })
}

const verifyToken = (req, res) => {
    const { token } = req.params
    Users.findOne({ token: token }, (err, user) => {
        if (!user || err) {
            return res.send({ success: false, message: 'Sorry, Unable to verify your request. Either your link has expired or you have provided incorrect link' })
        }

        let decoded = jwt.decode(token, secret)

        if (decoded.exp >= moment().valueOf()) {
            Users.findByIdAndUpdate({ _id: user._id }, { $unset: { token: '' } }, { new: true, fields: { password: 0 } }, (error, result) => {
                if (error) {
                    return res.send({ success: false, message: 'Sorry, Unable to verify your request. Your link has either expired or become invalid.' })
                }

                return res.send({ success: true, user: result })
            })
        }
        else {
            return res.send({ success: false, message: 'Sorry, your forgot password link has expired.' })
        }
    })
}

module.exports = {
    verifyEmail,
    verifyToken
}
