const express = require('express');
const router = express.Router();

const auth = require('./helpers/auth');
const Trip = require('../models/trip');
const Event = require('../models/event');

router.get('/', (req, res, next) => {
  Trip.find({}, function(err, trips) {
    if (err) {
      console.error(err);
    }

    console.log(trips);
    res.render('trips/index', { trips: trips });
  });
});

router.get('/new', (req, res, next) =>{
  res.render('trips/new')
})

router.get('/:id', (req, res, next) => {
  Trip.findById(req.params.id, function(err, trip) {
    if (err) { console.error(err); }

    Event.find({ trip: trip })
      .populate('events')
      .exec(function(err, events) {
        if (err) { console.error(err); }
        res.render('trips/show', { trip: trip, events: events, tripId: req.params.id });
      });
  });
});

router.get('/:id/edit', (req, res, next) => {
  Trip.findById(req.params.id, function(err, trip) {
    if (err) { console.error(err); }

    res.render('trips/edit', {trip: trip});
  })
})

router.post('/:id', (req, res, next) => {
  Trip.findByIdAndUpdate(req.params.id, req.body, function(err, trip) {
    if (err) { console.error(err); }

    res.redirect('/trips/' + req.params.id);
  })
})

router.post('/', (req, res, next) => {
  let trip = new Trip(req.body);

  trip.save(function(err, trip) {
    if (err) {
      console.error(err);
    }
    return res.redirect('/trips');
  });
});

router.use('/:tripId/trips', trips)

module.exports = router;
