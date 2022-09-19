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

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET Route for notes page
app.get('/notes', (req, res) => {
console.info(`${req.method} request received for index on server.js.`);
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// Use Routes
app.use('/api', api);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`)
});
