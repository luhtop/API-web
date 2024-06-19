'use strict';

/** @type {import('sequelize-cli').Migration} */


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clientes', [{
      nome: 'Cliente Exemplo',
      email: 'cliente@exemplo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clientes', null, {});
  }
};

