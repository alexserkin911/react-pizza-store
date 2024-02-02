const router = require('express').Router();
const { Op } = require('sequelize');
const { NewPizza } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    let { category, search, sortBy, orderBy, page, limit } = req.query;
    const categoryObj = {};
    if (category) {
      categoryObj.category = category;
    }

    const searchObj = {};
    if (search) {
      searchObj.title = {
        [Op.iLike]: `%${search}%`,
      };
    }

    limit = Number(limit);
    const offset = (page - 1) * limit;

    const pizza = await NewPizza.findAndCountAll({
      where: { ...categoryObj, ...searchObj },
      order: [[sortBy, orderBy]],
      offset,
      limit,
    });
    res.status(200).json(pizza);
  } catch (error) {
    console.error('Error get pizza', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/pizza/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const pizzaId = await NewPizza.findByPk(id);
    if (pizzaId) {
      res.status(200).json(pizzaId);
    } else {
      res.status(500).json({ message: 'Pizza not found' });
    }
  } catch (error) {
    console.error('Error retrieving pizza by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
