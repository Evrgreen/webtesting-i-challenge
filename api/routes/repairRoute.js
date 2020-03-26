const Router = require('express').Router();
const { repair } = require('../../enhancing/enhancer');

Router.route('/').post(async (req, res) => {
  item = req.body;
  const repairedItem = await repair(item);
  res.status(200).json(repairedItem);
});
module.exports = Router;
