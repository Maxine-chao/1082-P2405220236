const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'database_blogen(class)',
    password: '0000'
  });
  
module.exports = pool.promise();