'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pizzas',
      [
        {
          imageUrl:
            'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
          title: 'Пепперони Фреш с перцем',
          description: 'Сыр моцарелла, зеленый перец и двойная пепперони',
          price: 803,
          category: 0,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
          title: 'Сырная',
          description: 'Двойной сыр моцарелла',
          price: 245,
          category: 1,
          rating: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg',
          title: 'Цыпленок барбекю',
          description: 'Базовый соус барбекю, курица и сыр Моцарелла',
          price: 295,
          category: 1,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
          title: 'Кисло-сладкий цыпленок',
          description: 'Базовый соус барбекю, курица и сыр Моцарелла',
          price: 275,
          category: 2,
          rating: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
          title: 'Кипр Специальный',
          description:
            'Сыр моцарелла, халлуми, лунца (копченая свинина), свежие помидоры и мята',
          price: 415,
          category: 3,
          rating: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg',
          title: 'Крэйзи пепперони',
          description: 'Соус Табаско, сыр моцарелла и двойная пепперони',
          price: 580,
          category: 2,
          rating: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg',
          title: 'Пепперони',
          description: 'Сыр моцарелла и двойная пепперони',
          price: 675,
          category: 1,
          rating: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg',
          title: 'Маргарита',
          description: 'Сыр моцарелла и свежие помидоры',
          price: 450,
          category: 4,
          rating: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg',
          title: 'Четыре сезона',
          description:
            'Сыр моцарелла, свежие помидоры, бекон, пепперони и грибы',
          price: 395,
          category: 5,
          rating: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
          title: 'Овощи и грибы 🌱',
          description:
            'Сыр моцарелла, грибы, зеленый перец, лук, маслины и свежие помидоры',
          price: 285,
          category: 5,
          rating: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pizzas', null, {});
  },
};
