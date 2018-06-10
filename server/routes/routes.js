const express = require('express')
const User = require('../models/user.model')
const passport = require('passport')

const router = express.Router()

const app = 'Loading...'

module.exports = () => {

    router.get('/',
    require('connect-ensure-login').ensureLoggedIn(),
    (req, res) => {
        res.render('template', {
            title: `${req.user.username}'s Dashboard`,
            body: app
        })
    })

    /**
     * Register users
     */
    router.get('/register', (req, res) => {
        res.render('template', {
            title: 'Register User',
            body: app
        })
    })

    router.post('/register', (req, res) => {
            let userData = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
            
            let user = new User(userData)
            user.save((err) => {
                console.log('User was successfully created!')

                res.redirect('/login')
            })
        }
    )

    /**
     * Login users
     */
    router.get('/login', (req, res) => {
        res.render('template', {
            title: 'Login User',
            body: app
        })
    })

    router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/login'
    }),
    (req, res) => {
        res.redirect('/')
        console.log(req.user)
    })

    /**
     * Logout
     */
    router.post('/logout', (req, res) => {
        req.logout();
        res.redirect('/login');
    })

    router.get('*', (req, res) => {
        res.status(404).send('Error 404: page not found')
    })

    return router

}