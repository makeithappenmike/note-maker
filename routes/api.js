const express = require('express');
const uuid = require('../helper/uuid');
const { readFromFile, readAndAppend } = require('../helper/fsUtils');
const fs = require('fs');

// Bring in Routes
const apiRoutes = require('./apiRoutes.js');
const htmlRoutes = require('./htmlRoutes.js');

const app = express();

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// GET Route for notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    console.info(`${req.method} request received for notes api.js`);
  });

// POST Route for submitting notes
app.post('/notes', (req, res) => {

    console.info(`${req.method} request received for notes`);
  
    // If all the required properties are present
    if (req) {
        const title = req.body.title;
        const text = req.body.text;
        const allNotes =  [];
        console.log("Response Body:", req.body);
        console.log("Title:", title);
        console.log("Text:", text);

        // Create noteAdded object
        const noteAdded = {
            title: title,
            text: text
        };

        // allNotes.push(noteAdded);

        console.log("Note Added:", typeof(JSON.stringify(noteAdded)));



        readAndAppend(noteAdded, './db/db.json');
        res.json(`Note added successfully 🚀`);
  
    //   res.json(res);
    } else {
      res.json('Error in posting note');
    }
  });

module.exports = app;