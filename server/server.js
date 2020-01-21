var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('server');
var morgan = require('morgan');
var path = require('path');
// var bodyParser = require('body-parser');

var app = express();
var port = 4000 || process.env.PORT;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, './src')));
app.use(express.static(path.join(__dirname, './src/scripts/css')));
app.use(express.static(path.join(__dirname, './src/scripts/js')));
// app.use('/css',);

// routing
// var csoftRouter = express.Router();
// var userRouter = express.Router();


app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  debug(`listen on port ${chalk.green(port)}`);
});