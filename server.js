const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const expressSession = require('express-session');
const flash = require('connect-flash');
const ejs = require('ejs');

const config = require('./config');
const initPassport = require('./passport/init');
const routes = require('./routes/routes')(passport);

const app = express();

// Connect to mongodb
mongoose.connect(config.dbUrl);

// Engine settings
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, 'public'))); // TODO: tests only

// Passport settings
app.use(expressSession({secret: 'secretKey'}));
// TODO: mabue i can dellete this?
app.use(passport.initialize());
app.use(passport.session());

app.use(flash()); // TODO: tests only

initPassport(passport);

app.use('/', routes);

app.listen(config.port, () => console.log('Server started on port ' + config.port));