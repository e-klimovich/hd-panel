const LocalStrategy   = require('passport-local').Strategy;
const User = require('../models/user.model');
const bCrypt = require('bcrypt-nodejs');

module.exports = (passport) => {

	passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        (req, username, password, done) => { 
            User.findOne({'username':  username}, 
                (err, user) => {
                    if (err){
                        return done(err);
                    }
                        
                    if (!user){
                        return done(null, false, 
                            req.flash('message', 'User Not found'));
                    }

                    if (!isValidPassword(user, password)){
                        return done(null, false, 
                            req.flash('message', 'Invalid Password'));
                    }

                    return done(null, user);
                }
            );

        })
    );

    const isValidPassword = (user, password) => {
        return bCrypt.compareSync(password, user.password);
    }
    
}