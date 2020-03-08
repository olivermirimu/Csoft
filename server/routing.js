'use strict';

const express = require('express');
const csoftRouter = express.Router();

// const app = express();

function csoftRoutes() {

  csoftRouter.route('/about').get((req, res) => {
    res.render('about');
  });

  return csoftRouter;
}

module.exports = csoftRoutes;