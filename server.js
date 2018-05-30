const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

const port = process.env.PORT || 5000;

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to API'
    })
});

app.post('/api/post', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Post created...',
                authData: authData
            })
        }
    });
});

app.post('/api/login', (req, res) => {
    //Mock user
    const user = {
        id: 1,
        username: 'PeppaPig',
        email: 'peppapig@gmail.com'
    };

    jwt.sign({user: user}, 'secretkey', (err, token) => {
        res.json({
            token: token
        })
    });
});

// FORM OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
    //Get auth header value
    const bearerHeader = req.header['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

app.listen(port, () => console.log(`Server started on port ${port}`));