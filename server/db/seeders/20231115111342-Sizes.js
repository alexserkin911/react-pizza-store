'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Sizes',
      [
        {
          sizes: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizes: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizes: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sizes', null, {});
  },
};
