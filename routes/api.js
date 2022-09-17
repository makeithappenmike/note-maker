const express = require('express');

// Bring in Routes
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

const app = express();

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

module.exports = app;