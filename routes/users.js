const express = require('express');
const User = require('../models/user');
const auth = require('./helpers/auth')
const router = express.Router();

/* GET users listing. */
router.get('/', auth.requireLogin, (req, res, next) => {
  User.find({}, 'username', function(err, users) {
    if(err) {
      res.render('users/new');
    }
    res.render('trips/index');
  });
});

// Users new
router.get('/new', function(req, res, next) {
  res.render('users/new');
});

// Users create
router.post('/', (req, res, next) => {
  const user = new User(req.body);

  user.save(function(err, user) {
    if (err) {
      console.log(err);
    }
    User.authenticate(req.body.username,
    req.body.password, (err, user) => {
      if (err || !user) {
        const next_error = new Error("Username or password incorrect");
        next_error.status = 401;

        return next(next_error);
      } else {
        req.session.userId =  user._id;
        return res.redirect('/');
      }
    });
  });
});

module.exports = router;
