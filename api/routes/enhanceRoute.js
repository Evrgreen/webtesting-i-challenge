const Router = require('express').Router();
const { succeed, fail, get } = require('../../enhancing/enhancer');

Router.route('/').post(async (req, res) => {
  item = req.body;
  const enhanceChange = Math.random() * 100;
  console.log(enhanceChange);
  const enhancedItem = (await enhanceChange) > 50 ? succeed(item) : fail(item);
  console.log(enhancedItem);
  const returnItem = await get(enhancedItem);
  res.status(200).json(returnItem);
});
module.exports = Router;
