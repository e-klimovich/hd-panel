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
    router.get('/', (req, res) => {
        res.render('template', {
            title: 'Trrrrrrr',
            body: app
        })
    })
    
    router.get('/login', (req, res) => {
        res.render('template', {
            title: 'Login',
            body: 'Login page'
        })
    })
    
    router.get('/register', (req, res) => {
        res.render('template', {
            title: 'Register',
            body: 'Register new user page'
        })
    })
    
    // TODO: add pages
    // 1. edit user profile
    // 2. note link for modal call (?)
    router.get('/profile/:id', (req, res) => {
        res.render('template', {
            title: 'User profile',
            body: 'User page or admin look as user with ID ' + req.params.id
        })
    })
    
    router.get('*', (req, res) => {
        res.status(404).send('Error 404: page not found')
    })

    return router
}