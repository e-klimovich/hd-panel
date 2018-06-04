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

        // if user not auth go to register
        res.redirect('/register')
    })

    router.get('/register', (req, res) => {
        res.render('template', {
            title: 'Sign Up User',
            body: app
        })
    })

    router.post('/api/register', (req, res) => {
        res.json({
            err: false
        })
    })

    router.get('*', (req, res) => {
        res.status(404).send('Error 404: page not found')
    })

    return router
}