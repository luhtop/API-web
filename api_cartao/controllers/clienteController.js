const { Cliente } = require('../models');

exports.listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar clientes' });
  }
};

exports.obterCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter cliente' });
  }
};

exports.criarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json({ message: 'Cliente inserido com sucesso', cliente });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar cliente' });
  }
};

exports.atualizarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    await cliente.update(req.body);
    res.json({ message: 'Cliente atualizado com sucesso', cliente });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar cliente' });
  }
};

exports.excluirCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    await cliente.destroy();
    res.status(204).json({ message: 'Cliente excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir cliente' });
  }
};
