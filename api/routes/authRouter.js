const express = require('express');
const debug = require('debug')('app:authRoutes');
const passport = require('passport');

function authRoutes(User) {
  const authRouter = express.Router();

  authRouter.route('/users')
    .post((req, res) => {
      const user = new User({
        userName: req.body.client,
        password: req.body.password
      });
      if (!(user.userName && user.password)) {
        throw new Error(`sorry incomplete details`);
      }
      // WARN: user is logged in before saving of details to db
      (async function signUp() {
        await user.save();
        req.login(req.body, () => {
          res.redirect('/auth/profile');
        });
      }());
    })
    .get((req, res) => {
      User.find((err, user) => {
        if (err) {
          return res.send(err);
        }
        return res.json(user);
      });
    });
  authRouter.route('/profile')
    .get((req, res) => {
      res.json(req.user);
    });
  authRouter.route('/logIn')
    .post(passport.authenticate('local', {
      successRedirect: '/auth/profile',
      failureRedirect: '/logIn'
    }));
  //middleware
  authRouter.use('/user/:userName', (req, res, next) => {
    User.find({
      userName: req.params.userName
    }, (err, user) => {
      if (err) {
        return res.send(err);
      }
      if (user) {
        req.user = user;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  //individual user operations
  authRouter.route('/user/:userName')
    .get((req, res) =>
      res.json(req.user)
    )
    .patch((req, res) => {
      User.findOneAndUpdate({
        userName: req.params.userName
      }, req.body, (err, user) => {
        if (err) {
          return res.send(err);
        }
        debug(user);
        return res.json(user);
      });
    })
    .delete((req, res) => {
      User.findOneAndDelete({
        userName: req.params.userName
      }, err => {
        if (err) {
          return res.send(err);
        }
        return res.sendStatus(204);
      });
    });

  return authRouter;
}

module.exports = authRoutes;