const express = require('express');
const uuid = require('../helper/uuid');
const { readFromFile, readAndAppend } = require('../helper/fsUtils');
const fs = require('fs');
const db = require('../db/db.json');

// Bring in Routes
// const apiRoutes = require('./apiRoutes.js');
// const htmlRoutes = require('./htmlRoutes.js');

const app = express();

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (req, res) =>
  res.send(
    `Make a GET request using to <a href="http://localhost:${PORT}/api/notes">http://localhost:${PORT}/api/notes</a>`
  )
);

// GET Route for retrieving all Notes
app.get('/notes', (req, res) => {
  console.info(`${req.method} request received for notes on api.js`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// GET route that returns a note by id
app.get('/api/notes/:id', (req, res) => {
  // Coerce the specific search term to lowercase
  const idQueried = req.params.id.toLowerCase();

  // Iterate through the terms name to check if it matches `req.params.term`
  for (let i = 0; i < db.length; i++) {
    if (idQueried === db[i].id.toLowerCase()) {
      return res.json(db[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No match found');
});

// DELETE route
app.delete('/api/notes/:id', (req, res) => {
  // Coerce the specific search term to lowercase
  const requestedTerm = req.params.term.toLowerCase();

  // Iterate through the terms name to check if it matches `req.params.term`
  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No match found');
});

// POST Route for submitting notes
app.post('/notes', (req, res) => {

    console.info(`${req.method} request received for notes on api.js`);
  
    // If all the required properties are present
    if (req) {
        const title = req.body.title;
        const text = req.body.text;
        const id = uuid();

        // Create noteAdded object
        const noteAdded = {
            id: id,
            title: title,
            text: text
        };

        console.log("Note Added:", noteAdded);
        
        readAndAppend(noteAdded, './db/db.json');
        res.json(`Note added successfully 🚀`);
  
    //   res.json(res);
    } else {
      res.json('Error in posting note');
    }
  });

module.exports = app;