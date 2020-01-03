const express = require('express');
const app = express();
const router = require('./routes');
const helpers = require('./helpers');
const path = require('path');
const sequelize = require('./config/database');
require('./models/Project');

// app database conn
sequelize.sync()
    .then(() => console.log("DB Connection Success"))
    .catch(error => console.error("An unexpected error occurred", error));

// app routes
app.use('/', router);

// static files dir
app.use(express.static('public'));

// app template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views/pages'));


// start server
app.listen(7000);
