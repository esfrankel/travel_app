const express = require('express');
const User = require('../models/user.js');

const router = express.Router();

// Set layout variables
router.use((req, res, next) => {
<<<<<<< HEAD
  res.locals.title = 'WanderList';
=======
  res.locals.title = 'MakeReddit';
>>>>>>> ea1219a44b07050f3aa07c0f8dc1c56e9e450763
  res.locals.currentUserId = req.session.userId;

  next();
});

// Home Page
router.get('/',(req, res) => {
  res.render('index');
});

// login
router.get('/login', (req, res) => {
  res.render('login');
});

// POST login
router.post('/login', (req, res, next) => {
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

module.exports = router;
