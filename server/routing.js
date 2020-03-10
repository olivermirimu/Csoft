'use strict';

const express = require('express');

// const app = express();
const nav = [{
  name: 'Home',
  link: '/home'
}, {
  name: 'Services',
  link: '/services'
}, {
  name: 'About',
  link: '/about'
}, {
  name: 'Portfolio',
  link: '/portfolio'
}, {
  name: 'Registration',
  link: '/signUp'
}, {
  name: 'Log In',
  link: '/logIn'
}];

function csoftRoutes() {
  const csoftRouter = express.Router();
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
  return csoftRouter;
}

module.exports = csoftRoutes;