const express = require('express');
const CompraController = require('../controller/CompraController');

const router = express.Router();

router.get('/:id_usuario/finalizadas', CompraController.getCompraFinalizado);
router.get('/:id_usuario', CompraController.getCompra);
router.post('/', CompraController.addCompra);
router.put('/:id', CompraController.editCompra);
router.put('/:id/:status_compra', CompraController.compraFinal);
router.delete('/:id', CompraController.deleteCompra);

module.exports = router;
