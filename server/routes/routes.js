const express = require('express')
//const passport = require('passport')

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
            console.log(req.body);
            res.json(req.body);
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

    router.get('*', (req, res) => {
        res.status(404).send('Error 404: page not found')
    })

    return router

}