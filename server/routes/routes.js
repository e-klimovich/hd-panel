const express = require('express')
const passport = require('passport')
// const ensureLoggedIn = require('connect-ensure-login/lib/ensureLoggedIn')
// const ensureLoggedOut = require('connect-ensure-login/lib/ensureLoggedOut')

const User = require('../models/user.model')
const Note = require('../models/note.model')

const router = express.Router()

const app = 'Loading...'

module.exports = () => {

    /**
     * Routing
     */
    router.get('*', (req, res) => {
        res.render('template', {
            title: 'Help Desc',
            body: app
        })
    })

    /**
     * API
     */
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

    router.post('/api/login',
    // pasport authenticate
    passport.authenticate('local', {
        failureRedirect: '/login'
    }),
    // success authenticate response
    (req, res) => {
        res.json({
            status: true,
            user: {
                _id: req.user.id,
                username: req.user.username,
                email: req.user.email,
                isAdmin: req.user.isAdmin,
            }
        })
    })

    router.post('/api/update-profile', (req, res) => {
        User.updateOne({_id: req.body._id}, 
            {username: req.body.username, email: req.body.email}, 
            (err) => {
            const message = err
                ?  'I don\'t know what happened but user wasn\'t updated'
                :  'That\'s OK! User was updated'

            res.json({
                status: true,
                message,
                user: {
                    _id: req.user.id,
                    username: req.body.username,
                    email: req.body.email,
                    isAdmin: req.user.isAdmin
                }
            })
        })
    })

    /**
     * Userlist
     */
    router.post('/api/get-users', (req, res) => {
        const filterBy = {isAdmin: false}

        User.find(filterBy, (err, users) => {
            let newArray = users.map((user) => ({
                _id: user._id,
                username: user.username,
                email: user.email
            }))

            res.json({ users: newArray})
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
            author_id: req.body.author_id || req.user._id,
            author_name: req.body.author_name || req.user.username
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
    router.post('/api/get-notes', (req, res) => {

        const filterBy = req.user.isAdmin ? {} : {author_id: req.user._id}

        Note.find(filterBy, (err, docs) => {
            res.json({ docs })
        })

    })

    return router

}