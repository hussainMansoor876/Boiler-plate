const mongoose = require('mongoose')
const Schema = mongoose.Schema

const selectorSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    selectorReview: {
        type: Array,
        required: true
    }
})

const Selectors = mongoose.model('selectors', selectorSchema)

module.exports = Selectors