const express = require('express');

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
module.exports = nav;