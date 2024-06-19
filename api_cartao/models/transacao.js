'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transacao extends Model {
    static associate(models) {
      Transacao.belongsTo(models.Cartao, { foreignKey: 'cartaoId', as: 'cartao' });
    }
  }
  Transacao.init({
    descricao: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transacao',
  });
  return Transacao;
};
