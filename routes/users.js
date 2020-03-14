/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const usersRouter = require('express').Router();

const users = require('../data/users.json');

usersRouter.get('/', (req, res) => {
  res.send(users);
});

// usersRouter.get('/:id', (req, res) => {
//   const { id } = req.params;

//   if (!users.filter((user) => user._id === id)) {
//         res.send({ message: 'Нет пользователя с таким id' });
//         return;
//       }
//   users.forEach((user) => {
//     if (user._id === id) {
//       res.send(user);
//     }
//   });
// });

const doesUserExist = (req, res) => {
  const user = users.find((elem) => elem._id === req.params.id);
  if (!user) {
    res.send({ message: 'Нет пользователя с таким id' });
    return;
  }
  res.send(user);
};


// const doesUserExist = (req, res, next) => {
//   const userIn = users.some((user) => user._id === req.params.id);
//   if (userIn === false) {
//     res.send({ message: 'Нет пользователя с таким id' });
//     return;
//   }
//   next();
// };
// const sendUser = (req, res) => {
//   res.send('works');
// };

usersRouter.get('/:id', doesUserExist);
// usersRouter.get('/:id', sendUser);
module.exports = usersRouter;
