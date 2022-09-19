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

// GET Route for retrieving all Notes
app.get('/notes', (req, res) => {
  console.log(req.params);
  console.info(`${req.method} request received for notes on api.js`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// GET route that returns a note by id
app.get('/notes/:id', (req, res) => {

  const requestedNote = req.params.id;
  console.log(requestedNote);
  for (let i = 0; i < db.length; i++) {
    if (requestedNote === db[i].id) {
      return res.json(db[i]);
    }
  }

  // Return a message if the note doesn't exist in our DB
  return res.json('Note not found');
});

// DELETE route
app.delete('/notes/:id', (req, res) => {

  console.info(`${req.method} request received for notes on api.js`);

  const requestedNote = req.params.id;

  console.log("Clicked:", requestedNote);

  console.log(typeof(db.toString()));

  fs.readFile('./db/db.json', 'utf8', (err, data) => {

      const parsedData = JSON.parse(data);
      console.log("Read File:", parsedData);

    // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    
    for(var i = 0; i < data.length; i++){ 
      console.log(parsedData[i]);
      if ( parsedData[i] === requestedNote) { 
        parsedData.splice(i, 1); 
      }
    }

    if (err) {
      console.error(err);

    } else {
      // const parsedData = JSON.parse(data);
      // parsedData.push(content);
      // writeToFile(file, parsedData);
      console.log("Success");
    }
  });
  
  console.log(requestedNote);
  for (let i = 0; i < db.length; i++) {
    if (requestedNote === db[i].id) {
      return res.json(db[i]);
    }
  }

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