const express = require('express');
const router = express.Router({mergeParams: true});
const auth = require('./helpers/auth');
const Trip = require('../models/trip');
const Event = require('../models/event');

router.delete('/', auth.requireLogin, (req, res, next) => {
  Event.findByIdAndRemove(req.body.delete_id, function(err, event) {
    if (err) { console.error(err); }
    res.redirect('/trips/'+event.trip._id);
  });
});

// Event new
router.get('/new', auth.requireLogin, (req, res, next) => {
  Trip.findById(req.params.tripId, function(err, trip) {
    if(err) { console.error(err) };

    res.render('events/new', { trip: trip });
  });
});

// Events create
router.post('/', auth.requireLogin, (req, res, next) => {
  Trip.findById(req.params.tripId, function(err, trip) {
    if(err) { console.error(err) };

    let event = new Event(req.body);
    event.trip = trip;

    event.save(function(err, event) {
      if(err) { console.error(err) };
      console.log(event.date)
      return res.redirect(`/trips/${trip._id}`);
    });
  });
});

// Events edit
router.get('/:id/edit', auth.requireLogin, (req, res, next) => {
  Trip.findById(req.params.id, (err, trip) => {
      if (err){
          console.error(err)
      };

    res.render('trips/edit', { event: event });
  })
});

module.exports = router;
