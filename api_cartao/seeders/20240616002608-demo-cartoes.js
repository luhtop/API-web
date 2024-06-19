'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cliente = await queryInterface.sequelize.query(
      `SELECT id FROM Clientes LIMIT 1;`
    );

    const clienteId = cliente[0][0].id;

    await queryInterface.bulkInsert('Cartaos', [{
      numero: '1234567890123456',
      validade: new Date('2023-12-31'),
      cvv: '123',
      limite: 5000.00,
      clienteId,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cartaos', null, {});
  }
};

