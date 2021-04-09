'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Compra', [
      {
        total: 50.50,
        data_criacao: "2020-03-29 01:02:30",
        tipo_pagamento: "Cartão",
        status: "Autorizada"
      },
      {
        total: 200,
        data_criacao: "2020-05-05 12:12:12",
        tipo_pagamento: "Boleto",
        status: "Pendente"
      },
      {
        total: 12,
        data_criacao: "2020-02-02 02:02:02",
        tipo_pagamento: "Débito",
        status: "Cancelado"
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Compra', null, {});
     
  }
};
