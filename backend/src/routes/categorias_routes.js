const express = require('express');
const connection = require('../connection');

const router = express.Router();

  router.get('/:id',(req, res) => {
    const idCategoria = req.params.id;
    const sql = 'SELECT * FROM categorias WHERE idcategoria = ?';

    connection.query(sql, [idCategoria], (err, result) => {
      if (err) {
        res.send('Error al obtener la categoria');
      } else {
        res.json(result);
      }
    });
  });

  


  module.exports = router;