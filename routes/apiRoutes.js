const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');

// Helper method for generating unique ids
const uuid = require('./helper/uuid');

// POST Route for submitting feedback
app.post('/api/notes', (req, res) => {
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