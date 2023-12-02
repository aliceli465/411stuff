// index.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const testRoute = require('./routes/testRoute');
const registerRoute = require('./routes/register')
app.use(bodyParser.urlencoded({ extended: true })); // Add this line to parse the request body
app.use('/', testRoute);
app.use('/', registerRoute);
app.use(express.static(__dirname, { index: 'index.html' }));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
