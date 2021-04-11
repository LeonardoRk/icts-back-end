'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Compra.belongsToMany(models.Produto, { through: 'Compra_Produto', onDelete: 'cascade' });
      models.Produto.belongsToMany(Compra, { through: 'Compra_Produto', onDelete: 'cascade' });
    }
  };
  Compra.init({
    total: DataTypes.DOUBLE,
    tipo_pagamento: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Compra',
    freezeTableName: true
  });
  return Compra;
};