//not sure wtf to put here
const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

// const connectToDatabase = require('./routes/database');
// connectToDatabase((err, connection) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//   }

//   // Pass the database connection to your routes
//   app.set('db', connection);
// });

//const registerRoute = require('./routes/register');
//not sure what the middlewares would be
//app.use('/', registerRoute);
//index.html
app.use(express.static(__dirname, { index: 'index.html' }));

// Set up the server to listen on a port
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
