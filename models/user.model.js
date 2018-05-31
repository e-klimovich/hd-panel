const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    id: Number,
    username: String,
    password: String,
    email: String,
    isAdmin: Boolean
})