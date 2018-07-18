const express = require('express');
const router = express.Router({mergeParams: true});
const auth = require('./helpers/auth');
const Trip = require('../models/trip');
const Event = require('../models/event');

// Event new
router.get('/new', auth.requireLogin, (req, res, next) => {
<<<<<<< HEAD
=======

>>>>>>> 443440dc5aad84fde78d322c0acaaada2b3c573d
  Trip.findById(req.params.roomId, function(err, room) {
    if(err) { console.error(err) };

    res.render('events/new', { trip: trip });
  });
<<<<<<< HEAD
=======

>>>>>>> 443440dc5aad84fde78d322c0acaaada2b3c573d
});

// Posts create
router.post('/', auth.requireLogin, (req, res, next) => {
  Trip.findById(req.params.roomId, function(err, room) {
    if(err) { console.error(err) };

    let event = new Event(req.desc);
    event.trip = trip;

    event.save(function(err, event) {
      if(err) { console.error(err) };

      return res.redirect(`/trips/${trip._id}`);
    });
  });
});

module.exports = router;
