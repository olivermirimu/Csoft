<<<<<<< HEAD
'use strict';
//module imports
=======
>>>>>>> 88420c06f34b3e345c93c0eb47b201d59c585398
var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('server');
var morgan = require('morgan');
var path = require('path');
// var bodyParser = require('body-parser');

<<<<<<< HEAD
//variable imports
const csoftRouter = express.Router();

//app variables and constants
const nav = [{
  page: 'Home',
  link: '/home'
}, {
  page: 'Services',
  link: '/services'
}, {
  page: 'About',
  link: '/about'
}, {
  page: 'Login',
  link: '/login'
}];
=======
>>>>>>> 88420c06f34b3e345c93c0eb47b201d59c585398
var app = express();
var port = 4000 || process.env.PORT;

app.use(morgan('tiny'));
<<<<<<< HEAD
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
=======
app.use(express.static(path.join(__dirname, './src')));
app.use(express.static(path.join(__dirname, './src/scripts/css')));
app.use(express.static(path.join(__dirname, './src/scripts/js')));
// app.use('/css',);

// routing
// var csoftRouter = express.Router();
// var userRouter = express.Router();


>>>>>>> 88420c06f34b3e345c93c0eb47b201d59c585398
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
<<<<<<< HEAD
  debug(`listening on port ${chalk.green(port)}`);
=======
  debug(`listen on port ${chalk.green(port)}`);
>>>>>>> 88420c06f34b3e345c93c0eb47b201d59c585398
});