const express = require('express');
const mysql = require('mysql2/promise');
const { Connector } = require('@google-cloud/cloud-sql-connector');

const router = express.Router();

router.post('/register-route', async (req, res) => {
  try {
    const email = req.body.email; // Extract email from the request body

    if (await doesUserExist(email)) {
      res.send('user exists')
    } else {
      await createUser(email);
      res.send('user created')
    }
  } catch (error) {
    console.error('Error during registration:', error);
    res.send('error')
  }
});

//check if exists
async function doesUserExist(email) {
  const connector = new Connector();
  const clientOpts = await connector.getOptions({
    instanceConnectionName: 'abdusdogs:us-east1:pt1',
    ipType: 'PUBLIC',
  });
  const pool = await mysql.createPool({
    ...clientOpts,
    user: 'root',
    password: 'pt1',
    database: 'abdusDB',
  });
  const conn = await pool.getConnection();

  try {
    const [rows] = await conn.query('SELECT COUNT(*) as count FROM User WHERE email = ?', [email]);
    console.log("count of rows with email: " + email);
    console.log(rows[0].count);
    return rows[0].count > 0;
  } finally {
    await pool.end();
    connector.close();
    console.log("ending doesUserExist function");

  }
}

//make new user
async function createUser(email) {
  const connector = new Connector();
  const clientOpts = await connector.getOptions({
    instanceConnectionName: 'abdusdogs:us-east1:pt1',
    ipType: 'PUBLIC',
  });
  const pool = await mysql.createPool({
    ...clientOpts,
    user: 'root',
    password: 'pt1',
    database: 'abdusDB',
  });
  const conn = await pool.getConnection();
  try {
    //insert new user
    const [result] = await conn.query('INSERT INTO User VALUES (?)', [email]);
    console.log("result of inserting user:");
    console.table(result);
  } finally {
    await pool.end();
    connector.close();
    console.log("ending creatUser function");
  }
}

//create db pool
// async function createDatabasePool() {
//   const connector = new Connector();
//   const clientOpts = await connector.getOptions({
//     instanceConnectionName: 'abdusdogs:us-east1:pt1',
//     ipType: 'PUBLIC',
//   });
//   return mysql.createPool({
//     ...clientOpts,
//     user: 'root',
//     password: 'pt1',
//     database: 'abdusDB',
//   });
// }

module.exports = router;
