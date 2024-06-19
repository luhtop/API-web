const { Transacao } = require('../models');

exports.listarTransacoes = async (req, res) => {
  try {
    const transacoes = await Transacao.findAll();
    res.json(transacoes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar transações' });
  }
};

exports.obterTransacao = async (req, res) => {
  try {
    const transacao = await Transacao.findByPk(req.params.id);
    if (!transacao) {
      return res.status(404).json({ error: 'Transação não encontrada' });
    }
    res.json(transacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter transação' });
  }
};

exports.criarTransacao = async (req, res) => {
  try {
    const transacao = await Transacao.create(req.body);
    res.status(201).json({ message: 'Transação inserida com sucesso', transacao });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar transação' });
  }
};

exports.atualizarTransacao = async (req, res) => {
  try {
    const transacao = await Transacao.findByPk(req.params.id);
    if (!transacao) {
      return res.status(404).json({ error: 'Transação não encontrada' });
    }
    await transacao.update(req.body);
    res.json({ message: 'Transação atualizada com sucesso', transacao });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar transação' });
  }
};

exports.excluirTransacao = async (req, res) => {
  try {
    const transacao = await Transacao.findByPk(req.params.id);
    if (!transacao) {
      return res.status(404).json({ error: 'Transação não encontrada' });
    }
    await transacao.destroy();
    res.status(204).json({ message: 'Transação excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir transação' });
  }
};
