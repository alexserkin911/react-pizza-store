'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'PizzaTypes',
      [
        {
          pizzaId: 1,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 1,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 2,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 3,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 4,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 5,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 5,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 6,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 7,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 7,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 8,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 8,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 9,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 9,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 10,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 10,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PizzaTypes', null, {});
  },
};
