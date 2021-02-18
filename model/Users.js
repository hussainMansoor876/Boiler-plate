const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    loginType: {
        type: String,
        default: 'auth'
    },
    password: {
        type: String,
        required: false
    },
    avatar: {
        type: Object,
        required: false
    },
    uid: {
        type: String,
        required: false
    },
    verify: {
        type: Boolean,
        default: false
    },
    token: {
        type: String,
    },
    otp: {
        type: String
    },
    Food: {
        type: Number,
        default: 25
    },
    Service: {
        type: Number,
        default: 25
    },
    Value: {
        type: Number,
        default: 25
    },
    Atmosphere: {
        type: Number,
        default: 25
    },
    sort: {
        type: Number,
        default: 1
    },
    selectors: [
        {
            type: Schema.Types.ObjectId,
            ref: 'selectors'
        }
    ]
})

const Users = mongoose.model('users', userSchema)

module.exports = Users;