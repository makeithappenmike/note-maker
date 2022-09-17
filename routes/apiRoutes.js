const router = require("express").Router();
const path = require('path');
const fs = require('fs');
const util = require('util');
const uuid = require('../helper/uuid');

// POST Route for submitting feedback
router.post('/api/notes', (req, res) => {
    // Destructuring assignment for the items in req.body
    const responseBody = req.body;
  
    // If all the required properties are present
    if (req) {
  
      console.log("Response Body:", req);
  
      const response = {
        status: 'success',
        body: newFeedback,
      };
  
      res.json(response);
    } else {
      res.json('Error in posting feedback');
    }
  });

  module.exports = router;
