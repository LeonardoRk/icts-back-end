'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('Compra_Produto', 
    { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(11)
      },
      produtoId: {
        type: Sequelize.BIGINT(11),
        allowNull: false,
        onDelete: 'CASCADE',
        references: { model: 'Produto', key: 'id'}
      },
      compraId: {
        type: Sequelize.BIGINT(11),
        allowNull: false,
        onDelete: 'CASCADE',
        references: { model: 'Compra', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('User_Profiles');

  }
};
