const bcrypt   = require('bcrypt-nodejs')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    }
})

schema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

schema.methods.validPassword = (password) => {
    return bcrypt.compareSync(password, this.local.password)
}

module.exports = mongoose.model('User', schema)