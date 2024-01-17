const router = require('express').Router();
const { Pizza, Size, Type, NewPizza } = require('../db/models');

// router.get('/', async (req, res) => {
//   try {
//     const pizzas = await Pizza.findAll({ include: [Size, Type] });
//     res.json(pizzas);
//     console.log(pizzas);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

router.get('/', async (req, res) => {
  try {
    let whereObj = {};
    if (req.query.category) {
      whereObj.category = req.query.category;
    }

    const { sortBy } = req.query;
    const sortProperty = req.query.order;

    const pizza = await NewPizza.findAll({
      where: whereObj,
      order: [[sortProperty, sortBy]],
    });
    res.json(pizza);
  } catch (error) {
    console.error('er get pizza', error);
  }
});

module.exports = router;
