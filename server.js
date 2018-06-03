const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const expressSession = require('express-session')
const http = require('http')

// webpack and hot reload

const webpack = require('webpack')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevMiddleware = require('webpack-dev-middleware')

// ----

const config = require('./config')
const webpackConfig = require('./webpack.config')
const compiler = webpack(webpackConfig)
const routes = require('./server/routes/routes')()
const initPassport = require('./server/authentication/init')

/**
 * Connect to MongoDB
 */
mongoose.connect(config.db.url)
    .catch(e => console.log(e.message))

/**
 * Express server settings
 */
const app = express()

app.set('views', path.resolve(__dirname, './server/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, 'build')));

/**
 * Webpack middleware
 */
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));


/**
 * Parsers init
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

/**
 * Authentification
 */
app.use(expressSession({
    secret: 'secretKey',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

initPassport(passport);

/**
 * Routes
 */
app.use('/', routes)

/**
 * Start server
 */
const server = http.createServer(app);

server.listen(
    config.server.port,
    'localhost',
    (err) => {
        if(err) throw err
        console.log('Server started on port ' + server.address().port)
    }
)