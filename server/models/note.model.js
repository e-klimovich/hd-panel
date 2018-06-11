const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        required: true
    },
    author_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Note', schema)