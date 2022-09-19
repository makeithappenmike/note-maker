const router = require("express").Router();
const path = require('path');
const uuid = require('../helper/uuid');

// GET Route for homepage
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
  console.info(`${req.method} request received for index from htmlRoutes.js`);
});

// GET Route for notes.html
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
  console.info(`${req.method} request received for notes on htmlRoutes.js`);
});

module.exports = router;
