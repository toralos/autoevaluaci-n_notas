const express = require('express');
const router = express.Router();

const notasController = require('../controllers/notasController');

router.get('/search', notasController.search);

router.get('/create', notasController.create); // ----> Imprime el formulario
router.post('/create', notasController.save); // ----> Recibe los datos del formulario y hace algo con ellos

router.get('/detail/:id', notasController.detail);

router.get('/edit/:id', notasController.edit);
router.put('/edit/:id', notasController.update);

router.delete('/delete/:id', notasController.delete)

module.exports = router;
