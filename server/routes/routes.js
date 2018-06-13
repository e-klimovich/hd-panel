const express = require('express')
const passport = require('passport')
const ensureLoggedIn = require('connect-ensure-login/lib/ensureLoggedIn')
const ensureLoggedOut = require('connect-ensure-login/lib/ensureLoggedOut')

const User = require('../models/user.model')
const Note = require('../models/note.model')

const router = express.Router()

const app = 'Loading...'

module.exports = () => {

    router.get('/',
    ensureLoggedIn('/login'),
    (req, res) => {
        res.render('template', {
            title: `${req.user.username}'s Dashboard`,
            body: app
        })
    })

    /**
     * Register users
     */
    router.get('/register',
    ensureLoggedOut('/'),
    (req, res) => {
        res.render('template', {
            title: 'Register User',
            body: app
        })
    })

    router.post('/register', (req, res) => {
            let userData = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                isAdmin: 0
            }
            
            let user = new User(userData)
            
            user.save((err) => {
                if(!err) {
                    console.log('User was successfully created!')

                    res.redirect('/login')
                }
            })
        }
    )

    /**
     * Login users
     */
    router.get('/login',
        ensureLoggedOut('/'),
        (req, res) => {
            res.render('template', {
                title: 'Login User',
                body: app
            })
    })

    router.post('/api/login',
    passport.authenticate('local', {
        failureRedirect: '/login'
    }),
    (req, res) => {
        res.json({
            user: {
                _id: req.user.id,
                username: req.user.username,
                isAdmin: req.user.isAdmin,
            }
        })
    })

    /**
     * Logout
     */
    router.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/login');
    })

    /**
     * Create note
     */
    router.post('/add-note', (req, res) => {

        let note = new Note({
            title: req.body.title,
            content: req.body.content,
            create_date: new Date(),
            author_id: req.user._id
        })

        console.log(note)
        
        note.save((err) => {
            if(!err) {
                console.log('Note was successfully created!')

                res.json({
                    err: false,
                    message: 'Note successfully saved'
                })
            }
        })
    })

    /**
     * Get notes for current user
     */
    router.post('/note-list', (req, res) => {

        let filterBy = req.user.isAdmin ? {} : {author_id: req.user._id}

        Note.find(filterBy, (err, docs) => {
            res.json({
                noteList: docs
            })
        })

    })

    router.get('*', (req, res) => {
        res.status(404).send('Error 404: page not found')
    })

    return router

}