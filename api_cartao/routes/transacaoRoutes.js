const express = require('express');
const router = express.Router();
const transacaoController = require('../controllers/transacaoController');

router.get('/', transacaoController.listarTransacoes);
router.get('/:id', transacaoController.obterTransacao);
router.post('/transacoes', transacaoController.criarTransacao);
router.put('/:id', transacaoController.atualizarTransacao);
router.delete('/:id', transacaoController.excluirTransacao);

module.exports = router;
