const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'veterinaria',
});

connection.connect((err) => {
  if (err) {
    console.log('Error al conectar');
  } else {
    console.log('Conectado a la BD');
  }
});

module.exports = connection;
