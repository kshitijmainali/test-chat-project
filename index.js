const express = require('express');
const mysql = require('mysql');

const app = express();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'kshitij',
  password: 'Display@124',
  database: 'testdatabase',
});

connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log('mysql connected');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
