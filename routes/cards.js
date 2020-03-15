const cardsRouter = require('express').Router();
const path = require('path');

// eslint-disable-next-line import/no-dynamic-require
const { cards } = require(path.join(__dirname, '../data/cards.json'));

cardsRouter.get('/cards', (req, res) => {
  res.send(cards);
});


module.exports = cardsRouter;
