const express = require('express')
const User = require('../models/user.model')
//const passport = require('passport')

const router = express.Router()

const app = 'Loading...'

module.exports = () => {

    router.get('/', (req, res) => {
        res.render('template', {
            title: 'User Profile',
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

    router.post('/api/register', (req, res) => {
            let userData = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
            
            let user = new User(userData)
            user.save((err) => {
                console.log('User was successfully created!')

                res.json({
                    err: err.code || false,
                    userid: user._id
                })
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

    router.post('/api/login', (req, res) => {
        res.json({
            err: false
        })
    })

    /**
     * Profile
     */

    router.get('/profile/:id', isUserAuthorize, (req, res) => {
        res.send('This is user profile ' + req.params.id)
    })

    router.get('*', (req, res) => {
        res.status(404).send('Error 404: page not found')
    })

    /**
     * Authorization check middleware
     */
    function isUserAuthorize(req, res, next) {
        console.log(req.session);

        if (req.session.user_id) {
            User.findById(req.session.user_id,
                (user) => {
                    if (user) {
                        req.currentUser = user;
                        next();
                    } else {
                        res.redirect('/login');
                    }
                }
            )
        } else {
            res.redirect('/login');
        }
    }

    return router

}