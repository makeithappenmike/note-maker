const express = require('express'); // Express
const uuid = require('../helper/uuid'); // ID creation
const { writeToFile, readFromFile, readAndAppend } = require('../helper/fsUtils'); // Helper files for writing and reading
const fs = require('fs'); // File storage
const db = require('../db/db.json'); // Our DB

const app = express();

// GET Route for retrieving all Notes
app.get('/notes', (req, res) => {
  // console.log(req.params);
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

// DELETE route that removes a note based on its key
app.delete('/notes/:id', (req, res) => {

  console.info(`${req.method} request received for notes on api.js`);

  // Set the id
  const requestedNote = req.params.id;

  // Read the db
  fs.readFile('./db/db.json', 'utf8', (err, data) => {

    let parsedData = JSON.parse(data);

    // Filter what pull from the DB to return a new array
    parsedData = parsedData.filter((elem) => elem.id !== requestedNote);

    // Handle errors
    if (err) {
      console.error(err);

    // Re-write file
    } else {
      writeToFile('./db/db.json', parsedData);
      console.log("File successfully re-written!");
    }
  });

});

// POST Route for adding notes
app.post('/notes', (req, res) => {

    console.info(`${req.method} request received for notes on api.js`);
  
    // If all the required properties are present
    if (req) {
        const title = req.body.title;
        const text = req.body.text;
        const id = uuid(); // This generates our ID

        // Create noteAdded object
        const noteAdded = {
            id: id,
            title: title,
            text: text
        };

        console.log("Note Added:", noteAdded);
        
        // Read the DB and write the new note
        readAndAppend(noteAdded, './db/db.json');
        res.json(`Note added successfully 🚀`);
  
    //   res.json(res);
    } else {
      res.json('Error in posting note');
    }
  });

module.exports = app;