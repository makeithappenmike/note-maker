const express = require('express');
const uuid = require('../helper/uuid');


// Bring in Routes
const apiRoutes = require('./apiRoutes.js');
const htmlRoutes = require('./htmlRoutes.js');

const app = express();

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// GET Route for notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
    console.info(`${req.method} request received for notes api.js`);
  });

// POST Route for submitting notes
app.post('/notes', (req, res) => {

    console.log("Click");
  
    // If all the required properties are present
    if (req) {
  
      console.log("Response Body:", req.body);
  
    //   res.json(res);
    } else {
      res.json('Error in posting note');
    }
  });

module.exports = app;