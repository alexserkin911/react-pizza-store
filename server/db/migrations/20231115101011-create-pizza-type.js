'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PizzaTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pizzaId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Pizzas',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      typeId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Types',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PizzaTypes');
  },
};
