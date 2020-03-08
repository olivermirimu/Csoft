const express = require('express');
const debug = require('debug')('api');
const chalk = require('chalk');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//program imports
const User = require('./models/userModel');
const authRouter = require('./routes/authRouter')(User);

//other constants and variables
const app = express();
const port = 3200;
const db = mongoose.connect('mongodb://localhost/csoft', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('tiny'));
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.send('This is an api that sorts the users out');
});

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}`);
});