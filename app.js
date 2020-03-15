const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/routes/users', usersRouter);
app.use('/routes/cards', cardsRouter);

app.listen(PORT);
