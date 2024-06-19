const express = require('express');
const router = express.Router();
const cartaoController = require('../controllers/cartaoController');

router.get('/', cartaoController.listarCartoes);
router.get('/:id', cartaoController.obterCartao);
router.post('/', cartaoController.criarCartao);
router.put('/:id', cartaoController.atualizarCartao);
router.delete('/:id', cartaoController.excluirCartao);

module.exports = router;
