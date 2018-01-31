const passport = require('passport');

// express' app object as parameter to wire up routes
module.exports = (app) => {
	app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile','email']
	}));

	app.get('/auth/google/callback', passport.authenticate('google'));
}

