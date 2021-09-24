const express = require('express');
const connection = require('../connection');

const router = express.Router();

router.get('/',(req, res) => {
    const sql = 'SELECT * FROM usuarios';

    connection.query(sql, (err, result) => {
      if (err) {
        res.send('Error al obtener los usuarios');
      } else {
        res.json(result);
      }
    });
  });

  router.get('/:id', (req, res) => {
    const idUsuario = req.params.id;
  
    const sql = 'SELECT * FROM usuarios WHERE id = ?';
  
    connection.query(sql, [idUsuario], (err, result) => {
      if (err) {
        res.send('Error al obtener los usuarios');
      } else {
        res.json(result);
      }
    });
  });
  
  router.post('/', (req, res) => {
    const sql = `INSERT INTO usuarios(nombre, apellido, email, password)
                 VALUES(?, ?, ?, ?)`;
  
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const password = req.body.password;
  
    connection.query(sql, [nombre, apellido, email, password], (err, result) => {
      if (err) {
        res.send('Error al insertar el usuario');
      } else {
        res.status(200).json({ message: 'Usuario creado' });
      }
    });
  });
  

router.put('/:id',(req, res) => {
 res.send('modificar usuario')
});

router.delete('/',(req, res) => {
 res.send('eliminar usuario')
 });

 module.exports = router;