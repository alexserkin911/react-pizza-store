const router = require('express').Router();
const { Op } = require('sequelize');
const { NewPizza } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    let { category, search, sortBy, orderBy, page, limit } = req.query;
    console.log(req.query);
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
    console.log(offset);

    const pizza = await NewPizza.findAndCountAll({
      where: { ...categoryObj, ...searchObj },
      order: [[sortBy, orderBy]],
      offset,
      limit,
    });
    res.json(pizza);
  } catch (error) {
    console.error('er get pizza', error);
  }
});

module.exports = router;
