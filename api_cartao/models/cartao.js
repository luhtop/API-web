'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cartao extends Model {
    static associate(models) {
      Cartao.belongsTo(models.Cliente, { foreignKey: 'clienteId', as: 'cliente' });
      Cartao.hasMany(models.Transacao, { foreignKey: 'cartaoId', as: 'transacoes' });
    }
  }
  Cartao.init({
    numero: DataTypes.STRING,
    validade: DataTypes.DATE,
    cvv: DataTypes.STRING,
    limite: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Cartao',
  });
  return Cartao;
};
