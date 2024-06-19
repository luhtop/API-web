'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cartao = await queryInterface.sequelize.query(
      `SELECT id FROM Cartaos LIMIT 1;`
    );

    const cartaoId = cartao[0][0].id;

    await queryInterface.bulkInsert('Transacaos', [{
      descricao: 'Compra Exemplo',
      valor: 150.00,
      data: new Date(),
      cartaoId,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Transacaos', null, {});
  }
};

