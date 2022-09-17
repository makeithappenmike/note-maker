const express = require('express');
const uuid = require('../helper/uuid');


// Bring in Routes
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

const app = express();

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

module.exports = app;