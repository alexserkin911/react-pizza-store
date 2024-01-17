'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PizzaType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PizzaType.init(
    {
      pizzaId: DataTypes.INTEGER,
      typeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'PizzaType',
    }
  );
  return PizzaType;
};
