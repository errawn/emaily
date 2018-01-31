const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

var app = express();

app.get('/', (req, res) => {
	res.send({ hello: 'world' });
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App running at port ${PORT}`));