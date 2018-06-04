const express = require('express')

const router = express.Router()

// !SSR!
//
// import React from 'react'
// import { renderToString } from 'react-dom/server'
// import App from '../../client/App'

// const app = renderToString(<App />)

const app = 'Loading...'

module.exports = () => {
    router.get('/', isLoggedIn, (req, res) => {
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
        res.json({
            err: false
        })
    })

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

    router.get('*', (req, res) => {
        res.status(404).send('Error 404: page not found')
    })

    /**
     * Route middleware function to know is user loggined
     */
    function isLoggedIn(req, res, next) {
        if(req.isAuthenticated()) {
            return next()
        } else {
            res.redirect('/login')
        }
    }

    return router
}