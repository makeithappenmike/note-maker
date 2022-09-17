const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const db = require('./db/db.json');
const api = require('./routes/api.js');

// Helper method for generating unique ids
const uuid = require('./helper/uuid');

// Needed for Heroku
const PORT = process.env.PORT || 3001;

const app = express();

// Bring in Routes
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

// Use Routes
app.use();

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
