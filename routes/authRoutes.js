const passport = require('passport');

// express' app object as parameter to wire up routes
module.exports = (app) => {
	// Google OAuth
	app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile','email']
	}));

	app.get('/auth/google/callback', passport.authenticate('google'));

	// Github OAuth
	app.get('/auth/github', passport.authenticate('github'));

	app.get('/auth/github/callback', passport.authenticate('github'))

	app.get('/api/current_user', (req, res) => {
		res.send(req.user)
	})
}

