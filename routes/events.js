const express = require('express');
const router = express.Router({mergeParams: true});
const auth = require('./helpers/auth');
const Trip = require('../models/trip');
const Event = require('../models/event');

// Event new
router.get('/new', auth.requireLogin, (req, res, next) => {
<<<<<<< HEAD
<<<<<<< HEAD
  
=======
  Trip.findById(req.params.roomId, function(err, room) {
    if(err) { console.error(err) };

    res.render('events/new', { trip: trip });
  });
>>>>>>> f2ab746dbb3af1470c63d9c2b544a0a935cd0f2b
=======

>>>>>>> Will
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
