import mysql from 'mysql2/promise';
import {Connector} from '@google-cloud/cloud-sql-connector';

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
// const [result] = await conn.query(`SELECT NOW();`);
// console.table(result); // prints returned time value from server

await pool.end();
connector.close();
// const mysql = require('mysql');
// const pool = mysql.createPool({
//   host: '34.73.45.209',
//   user: 'root',
//   password: 'pt1',
//   database: 'abdusDB',
//   connectionLimit: 10,
//   supportBigNumbers: true
// });

// //acquire connection from the pool
// module.exports = function connectToDatabase(callback) {
//   pool.getConnection((err, connection) => {
//     if (err) {
//       console.log(err);
//       callback(err);
//     } else {
//       console.log('Connected to database');
//       callback(null, connection);
//     }
//   });
// };
