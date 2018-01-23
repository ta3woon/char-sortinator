const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./router.js');
const path = require('path');

// EXPRESS
const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// ROUTES
app.use(express.static(path.resolve(__dirname, '')));

app.use('/', router);



// INITIALIZE
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening', port)
});

module.exports = app;