const express = require('express');
const router = express.Router({mergeParams: true});
const auth = require('./helpers/auth');
const Trip = require('../models/trip');

// Posts new
router.get('/new', auth.requireLogin, (req, res, next) => {
<<<<<<< HEAD

=======
  
>>>>>>> 1f41df01b65fc8298392c67fb4a8b153d9ec6b83
});

// Posts create
router.post('/', auth.requireLogin, (req, res, next) => {
  // TODO
})

module.exports = router;
