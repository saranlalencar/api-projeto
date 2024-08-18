'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      // Define associações aqui
    }
  }
  Categoria.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    use_in_menu: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false, // Valor padrão 0
    },
  }, {
    sequelize,
    modelName: 'Categoria',
    timestamps: true, // Adiciona created_at e updated_at automaticamente
  });
  return Categoria;
};
