'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Compra', [
      {
        total: 50.50,
        tipo_pagamento: "Cartão",
        status: "Autorizada"
      },
      {
        total: 200,
        tipo_pagamento: "Boleto",
        status: "Pendente"
      },
      {
        total: 12,
        tipo_pagamento: "Débito",
        status: "Cancelado"
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Compra', null, {});
     
  }
};
