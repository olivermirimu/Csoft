'use strict';
//module imports
var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('server');
var morgan = require('morgan');
var path = require('path');
// var bodyParser = require('body-parser');

//variable imports
const csoftRouter = express.Router();

//app variables and constants
var app = express();
var port = 4000 || process.env.PORT;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../src')));
app.use(express.static(path.join(__dirname, '../src/scripts/css')));
app.use(express.static(path.join(__dirname, '../src/scripts/js')));
app.use(express.static(path.join(__dirname, '../src/assets/images')));
app.use('/js', express.static(path.join(__dirname, '../src/serviceWorker.js')));
app.set('views', './src/views')
app.set('view engine', 'ejs');

// routing
app.use('/', csoftRouter);

csoftRouter.route('/about').get((req, res) => {
  res.render('about', nav);
});
csoftRouter.route('/services').get((req, res) => {
  res.render('services', nav);
});
csoftRouter.route('/portfolio').get((req, res) => {
  res.render('portfolio', nav);
});
csoftRouter.route('/signUp').get((req, res) => {
  res.render('registration', nav);
});
csoftRouter.route('/logIn').get((req, res) => {
  res.render('logIn', nav);
});
// csoftRouter.route('/home2').get((req, res) => {
//   res.sendFile('home.html');
// });
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});