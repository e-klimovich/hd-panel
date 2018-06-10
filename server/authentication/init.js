const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model')

module.exports = (passport) => {

    passport.use(new LocalStrategy(
        (username, password, done) => {
            User.findOne({username: username}, (err, user) => {
                if (err) {
                    return done(err)
                }
                if (!user) {
                    return done(null, false)
                }
                if (user.password !== password) {
                    return done(null, false)
                }
                return done(null, user)
            })
        }
    ))

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })
}