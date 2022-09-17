const router = require("express").Router();
const path = require('path');
const fs = require('fs');
const util = require('util');
const uuid = require('../helpers/uuid');

// GET Route for homepage
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET Route for notes.html
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

module.exports = router;
