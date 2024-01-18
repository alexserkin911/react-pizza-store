const router = require('express').Router();
const { Op } = require('sequelize');
const { NewPizza } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    let { category, search, sortBy, order, page, limit } = req.query;

    console.log(req.query);
    let whereObj = {};
    if (category) {
      whereObj.category = category;
    }

    if (search) {
      whereObj = {
        ...whereObj,
        [Op.or]: [{ title: { [Op.iLike]: `%${search}%` } }],
      };
    }
    page = page || 1;
    limit = limit || 4;
    let offset = page * limit - limit;

    const pizza = await NewPizza.findAll({
      where: whereObj,
      order: [[order, sortBy]],
      offset,
      limit,
    });
    console.log(pizza);
    res.json(pizza);
  } catch (error) {
    console.error('er get pizza', error);
  }
});

module.exports = router;
