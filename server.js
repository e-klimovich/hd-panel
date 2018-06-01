const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const expressSession = require('express-session');
const flash = require('connect-flash');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./config');
const webpackConfig = require('./webpack.config');
const initPassport = require('./src/server/passport/init');
const routes = require('./src/server/routes/routes')(passport);

const app = express();
const compiler = webpack(webpackConfig);

// Connect to mongodb
mongoose.connect(config.dbUrl)
    .then(console.log('Connected to ' + config.dbUrl))
    .catch(e => console.log(e.message));

// Engine settings
app.set('views', path.resolve(__dirname, './src/server/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: false
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.resolve(__dirname, 'build')));

// Passport settings
app.use(expressSession({
    secret: 'secretKey',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

initPassport(passport);

// Routing
app.use('/', routes);

app.listen(config.port, () => console.log('Server started on port ' + config.port));