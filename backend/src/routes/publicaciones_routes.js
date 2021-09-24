const express = require('express');
const connection = require('../connection');

const router = express.Router();

router.get('/',(req, res) => {
    const sql = 'SELECT * FROM publicaciones';

    connection.query(sql, (err, result) => {
      if (err) {
        res.send('Error al obtener los publicaciones');
      } else {
        res.json(result);
      }
    });
  });

  router.get('/categoria/:id',(req, res) => {
    const sql = 'SELECT * FROM publicaciones  WHERE cat_id = ?';
    const idCategoria = req.params.id

    connection.query(sql,[idCategoria], (err, result) => {
      if (err) {
        res.send('Error al obtener los publicaciones por categoria');
      } else {
        res.json(result);
      }
    });
  });

  router.get('/:id',(req, res) => {
    const idPublicacion = req.params.id;
    const sql = 'SELECT * FROM publicaciones WHERE id = ?';

    connection.query(sql, [idPublicacion], (err, result) => {
      if (err) {
        res.send('Error al obtener los publicacion');
      } else {
        res.json(result);
      }
    });
  });


  module.exports = router;