'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Produto', [
      {
        nome:"Condicionador",
        descricao:"Para os cabelos pós lavagem",
        preco:10.90,
        data_criacao: "2020-03-05 10:20:21",
        data_atualizacao: "2020-03-05 10:20:21"
      },
      {
        nome:"Piza",
        descricao:"Pré assada sabor frango",
        preco:19,
        data_criacao: "2020-04-05 10:20:21",
        data_atualizacao: "2020-06-05 10:20:21"
      },
      {
        nome:"Shampoo",
        descricao:"Para os cabelos sujos",
        preco:14.90,
        data_criacao: "2020-02-02 12:22:22",
        data_atualizacao: "2020-02-05 11:10:13"
      },
      {
        nome:"Cadeira",
        descricao:"Para sentar quando cansado",
        preco:855.99,
        data_criacao: "2020-01-01 12:02:15",
        data_atualizacao: "2020-02-03 10:20:21"
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Produto', null, {});

  }
};
