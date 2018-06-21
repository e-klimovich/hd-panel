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
            title: `Dashboard for ${req.user.username}`,
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

    router.post('/api/register', (req, res) => {
            const userData = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                isAdmin: 0
            }
            
            const user = new User(userData)
            
            user.save((err) => {
                if(!err) {
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
        req.logout()
        res.redirect('/login')
    })

    /**
     * Userlist
     */
    router.get('/api/get-users', (req, res) => {
        const filterBy = {isAdmin: false}

        User.find(filterBy, (err, docs) => {
            res.json({ docs })
        })
    })

    /**
     * Create note
     */
    router.post('/api/add-note', (req, res) => {

        const note = new Note({
            title: req.body.title,
            content: req.body.content,
            create_date: new Date(),
            author_id: req.body.author_id || req.user._id
        })

        note.save((err) => {
            if(!err) {
                res.json({ note })
            }
        })
    })

    /**
     * Delete note
     */
    router.post('/api/delete-note', (req, res) => {
        Note.deleteOne({_id: req.body._id}, (err) => {
            const response = err
                ?  {message: 'Note has not been removed'}
                :  {_id: req.body._id, message: 'Note has been removed'}

            res.json(response)
        })
    })

    /**
     * Update edited note
     */
    router.post('/api/update-note', (req, res) => {
        Note.updateOne({_id: req.body._id}, {content: req.body.content}, (err) => {
            const message = err
                ?  'I don\'t know what happened but this note did\'t saved'
                :  'That\'s OK! Note was saved'

            res.json({
                err: err || false,
                message: message
            })
        })
    })

    /**
     * Get notes for current user
     */
    router.get('/api/get-noties', (req, res) => {

        const filterBy = req.user.isAdmin ? {} : {author_id: req.user._id}

        Note.find(filterBy, (err, docs) => {
            res.json({ docs })
        })

    })

    router.get('*', (req, res) => {
        res.status(404).send('&#128169; Error 404: page not found. But unicorn could save you... <a href="/">&#129412;</a>')
    })

    return router

}