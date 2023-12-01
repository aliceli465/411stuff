const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();


//parse the info into json
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/register', (req, res) => {
  //what the user entered in
  const email = req.body.login;
  
  const db = req.app.get('db');
  //see if the user exists or not
  db.query('SELECT * FROM User WHERE email = ?', [email], (error, results) => {
    if (error) {
      console.error('Error querying the database:', error);
      res.status(500).send('Internal Server Error');
      return;
    }

    //user does not exist already
    if (results.length === 0) {
      db.query('INSERT INTO User (email) VALUES (?)', [email], (insertError) => {
        if (insertError) {
          console.error('Error inserting into the database:', insertError);
          res.status(500).send('Internal Server Error');
          return;
        }

        res.send('User registered successfully');
      });
    //user exists
    } else {
      res.send('User already exists');
    }
  });
});

module.exports = router;