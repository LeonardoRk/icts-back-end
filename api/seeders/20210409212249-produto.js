'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Produto', [
      {
        nome:"Condicionador",
        descricao:"Para os cabelos pós lavagem",
        preco:10.90,
      },
      {
        nome:"Piza",
        descricao:"Pré assada sabor frango",
        preco:19,
      },
      {
        nome:"Shampoo",
        descricao:"Para os cabelos sujos",
        preco:14.90,
      },
      {
        nome:"Cadeira",
        descricao:"Para sentar quando cansado",
        preco:855.99,
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Produto', null, {});

  }
};
