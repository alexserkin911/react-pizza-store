'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'PizzaSizes',
      [
        {
          pizzaId: 1,
          sizeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 1,
          sizeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 1,
          sizeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 2,
          sizeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 2,
          sizeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 3,
          sizeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 3,
          sizeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 4,
          sizeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 4,
          sizeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 4,
          sizeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 5,
          sizeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 5,
          sizeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 5,
          sizeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 6,
          sizeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 6,
          sizeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 7,
          sizeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 7,
          sizeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 7,
          sizeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 8,
          sizeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 8,
          sizeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 8,
          sizeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 9,
          sizeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 9,
          sizeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 9,
          sizeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 10,
          sizeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 10,
          sizeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pizzaId: 10,
          sizeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PizzaSizes', null, {});
  },
};
