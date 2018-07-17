const express = require('express');
const router = express.Router({mergeParams: true});
const auth = require('./helpers/auth');
const Trip = require('../models/trip');
const Event = require('../models/event');
// Posts new
router.get('/new', auth.requireLogin, (req, res, next) => {

});

// Posts create
router.post('/', auth.requireLogin, (req, res, next) => {
  // TODO
})

module.exports = router;
