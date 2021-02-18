const mongoose = require('./db')
const sgMail = require('./sendGrid')

module.exports = {
    mongoose,
    sgMail
}