const usersRouter = require('express').Router();
const path = require('path');

// eslint-disable-next-line import/no-dynamic-require
const { users } = require(path.join(__dirname, '../data/users.json'));

usersRouter.get('/cards', (req, res) => {
  res.send(users);
});

module.exports = usersRouter;
