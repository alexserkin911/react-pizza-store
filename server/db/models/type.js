'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    static associate(models) {
      this.belongsToMany(models.Pizza, {
        through: models.PizzaType,
        foreignKey: 'typeId',
      });
    }
  }
  Type.init(
    {
      types: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Type',
    }
  );
  return Type;
};
