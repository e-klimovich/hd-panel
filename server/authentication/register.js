const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');

module.exports = (passport) => {

    passport.use('local-register', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true
    },

    (req, username, password, done) => {

        process.nextTick(() => {

            User.findOne({ 'username': username }, (err, user) => {
                if (err) return done(err)

                if (user) {

                    return done(null, false, req.json({'err': 'This username already exist'}))

                } else {

                    let newUser = new User()

                    newUser.local.username = username
                    newUser.local.password = newUser.generateHash(password)

                    newUser.save((err) => {
                        if (err) throw err
                        return done(null, newUser)
                    })

                }
            }) 

        })
    }))

}