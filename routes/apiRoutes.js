const router = require("express").Router();
const uuid = require('../helper/uuid');

// // GET Route for retrieving all Notes
// router.get('/', (req, res) => {
//   console.info(`${req.method} request received for notes on apiRoutes.js`);
//   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });

// POST Route for submitting notes
// router.post('/notes', (req, res) => {

//     // Destructuring assignment for the items in req.body
//     const responseBody = req.body;
  
//     // If all the required properties are present
//     if (req) {
  
//       console.log("Response Body:", req);
  
//       const response = {
//         status: 'success',
//         body: newFeedback,
//       };
  
//       res.json(response);
//     } else {
//       res.json('Error in posting note');
//     }
//   });

  module.exports = router;
