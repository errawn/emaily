const express = require('express');
require('./services/passport'); // include google oauth file

var app = express();

require('./routes/authRoutes')(app); // auth routes


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App running at port ${PORT}`));