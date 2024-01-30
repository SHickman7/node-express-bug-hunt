const express = require('express');
const router = express.Router();

// ??? List of quotes  //FIX: Changed from {} to []
let quoteList = [];

// ??? GET request returns information
router.get('/', (req, res) => {  //FIX:  changed from /quotes to /
    console.log('GET Request made for /quotes');
    // Send back the list of quotes!
    res.send(quoteList);
});

// ??? POST request save user input
router.post('/', (req, res) => {
    console.log('POST Request made for /quotes');
    // Any data we send from the client is available
    // as a property of req.body.
    console.log('req.body', req.body);
    let quoteToAdd = req.body;
    quoteList.push(quoteToAdd); //FIX:  changed quotesList to quoteList
    res.sendStatus(201);
});

// PUT request update information

module.exports = router;  //FIX:  added this line of text