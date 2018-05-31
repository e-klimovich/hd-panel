var express = require('express');
var router = express.Router();

module.exports = (passport) => {
    // Render main login page
    router.get('/', (req, res) => {
        res.render('login', {
            head: {
                title: 'Login page'
            }
        });
    });

    // Post request hendler for login
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/home',
        failureRedirect: '/',
        failureFlash : true
    }));

    // Render page for logined users
    router.get('/home', (req, res) => {
        res.send('U were loggined');
    });

    return router;
}