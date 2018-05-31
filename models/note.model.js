const mongoose = require('mongoose');

module.exports = mongoose.model('Note', {
    theme: String,
    question: String,
    date: Date,
    username: String
})