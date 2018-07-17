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

router.get('/new', function(req, res, next) {
  res.render('users/new');
});

/* create users */
router.post('/', (req, res, next) => {
  const user = new User(req.body);

  user.save(function(err, user) {
    if (err) {
      console.log(err);
    }
    return res.redirect('trips/index');
  });
});

module.exports = router;
