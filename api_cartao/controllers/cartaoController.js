const { Cartao } = require('../models');

exports.listarCartoes = async (req, res) => {
    try {
      const cartoes = await Cartao.findAll();
      res.json(cartoes); // Retorna a lista de cartões em formato JSON
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar cartões' });
    }
  };  

exports.obterCartao = async (req, res) => {
    try {
      const cartao = await Cartao.findByPk(req.params.id);
      if (!cartao) {
        return res.status(404).json({ error: 'Cartão não encontrado' });
      }
      res.json(cartao); // Retorna o cartão encontrado em formato JSON
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter cartão' });
    }
  };  

exports.criarCartao = async (req, res) => {
    try {
      const cartao = await Cartao.create(req.body);
      res.status(201).json({ message: 'Cartão inserido com sucesso', cartao }); // Retorna mensagem de sucesso e o cartão criado
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar cartão' });
    }
  };
  

exports.atualizarCartao = async (req, res) => {
    try {
      const cartao = await Cartao.findByPk(req.params.id);
      if (!cartao) {
        return res.status(404).json({ error: 'Cartão não encontrado' });
      }
      await cartao.update(req.body);
      res.json({ message: 'Cartão atualizado com sucesso', cartao }); // Retorna mensagem de sucesso e o cartão atualizado
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar cartão' });
    }
  };  

exports.excluirCartao = async (req, res) => {
    try {
      const cartao = await Cartao.findByPk(req.params.id);
      if (!cartao) {
        return res.status(404).json({ error: 'Cartão não encontrado' });
      }
      await cartao.destroy();
      res.json({ message: 'Cartão excluído com sucesso' }); // Retorna mensagem de sucesso após exclusão
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir cartão' });
    }
  };
  
