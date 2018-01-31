const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.send({ hello: 'world' });
})

const PORT = process.env.PORT || 8000;
app.listen(PORT);