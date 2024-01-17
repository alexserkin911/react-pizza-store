'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewPizza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NewPizza.init({
    imageUrl: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    types: DataTypes.JSON,
    sizes: DataTypes.JSON,
    price: DataTypes.INTEGER,
    category: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NewPizza',
  });
  return NewPizza;
};