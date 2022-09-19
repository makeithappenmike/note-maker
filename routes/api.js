const express = require('express');
const uuid = require('../helper/uuid');
const { readFromFile, readAndAppend } = require('../helper/fsUtils');
const fs = require('fs');

// Bring in Routes
// const apiRoutes = require('./apiRoutes.js');
// const htmlRoutes = require('./htmlRoutes.js');

const app = express();

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

// GET Route for retrieving all Notes
app.get('/notes', (req, res) => {
  console.info(`${req.method} request received for notes on api.js`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// DELETE Route for delete a note
app.get('/notes', (req, res) => {
  console.info(`${req.method} request received for notes on api.js`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting notes
app.post('/notes', (req, res) => {

    console.info(`${req.method} request received for notes on api.js`);
  
    // If all the required properties are present
    if (req) {
        const title = req.body.title;
        const text = req.body.text;
        const allNotes =  [];
        const id = uuid();

        // Create noteAdded object
        const noteAdded = {
            id: id,
            title: title,
            text: text
        };

        // console.log("Note Type:", typeof(JSON.stringify(noteAdded)));
        console.log("Note Added:", noteAdded);
        
        readAndAppend(noteAdded, './db/db.json');
        res.json(`Note added successfully 🚀`);
  
    //   res.json(res);
    } else {
      res.json('Error in posting note');
    }
  });

module.exports = app;