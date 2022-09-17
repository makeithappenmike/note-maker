const router = require("express").Router();
const uuid = require('../helper/uuid');

// POST Route for submitting notes
router.post('/notes', (req, res) => {

    console.log("Click");

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
      res.json('Error in posting note');
    }
  });

  module.exports = router;
