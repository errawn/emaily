const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys')

require('./models/User'); // require User Model when app boots up
require('./services/passport'); // include google oauth file



mongoose.connect('mongodb://localhost/emaily', () => console.log(mongoose.connection.readyState));

var app = express();
app.use(
	cookieSession({
		name: 'session',
		maxAge: 24 * 60 * 60 * 1000, // 24 hours
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // auth routes


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App running at port ${PORT}`));