const login = require('./login');
//const signup = require('./signup');
const User = require('../models/user.model');

module.exports = (passport) => {

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    login(passport);
    //signup(passport);

}