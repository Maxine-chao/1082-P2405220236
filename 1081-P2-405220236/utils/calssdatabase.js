const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'class_demo',
    password: '0000'
  });
  
module.exports = pool.promise();