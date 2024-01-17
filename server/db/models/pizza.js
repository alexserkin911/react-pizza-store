'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pizza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Type, {
        through: models.PizzaType,
        foreignKey: 'pizzaId',
      });
      this.belongsToMany(models.Size, {
        through: models.PizzaSize,
        foreignKey: 'pizzaId',
      });
    }
  }
  Pizza.init(
    {
      imageUrl: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      category: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Pizza',
    }
  );
  return Pizza;
};
