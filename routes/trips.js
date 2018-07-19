const express = require('express');
const router = express.Router();

const auth = require('./helpers/auth');
const Trip = require('../models/trip');
const Event_Test = require('../models/event');
const events = require('./events');
const User = require('../models/user');


router.get('/', auth.requireLogin, (req, res, next) => {
  Trip.find({users: res.locals.currentUserId}).populate('events').exec(function(err, trips) {
    if (err) {
      console.error(err);
    }
    console.log(res.locals.currentUserId);
    res.render('trips/index', { trips: trips });
  });
});

router.get('/new', auth.requireLogin, (req, res, next) =>{
  User.findById(req.params.userId, function(err, trip) {
    if(err) { console.error(err);}

    res.render('trips/new');
  })
});

router.get('/:id', auth.requireLogin, (req, res, next) => {
  Trip.findById(req.params.id, function(err, trip) {
    if(err) { console.error(err) };

    Event_Test.find({ trip: trip })
      .exec(function(err, events) {
        if(err) { console.error(err) };
      res.render('trips/show', { trip: trip, events: events, tripId: req.params.id });
    });
  });
});


router.get('/:id/edit', auth.requireLogin, (req, res, next) => {
  Trip.findById(req.params.id, function(err, trip) {
    if (err) { console.error(err); }

    res.render('trips/edit', {trip: trip});
  })
})

router.post('/:id', auth.requireLogin, (req, res, next) => {
  Trip.findByIdAndUpdate(req.params.id, req.body, function(err, trip) {
    if (err) { console.error(err); }

    res.redirect('/trips/' + req.params.id);
  })
})


router.post('/', auth.requireLogin, (req, res, next) => {
  let trip = new Trip(req.body);

  trip.users.push(req.session.userId);
  trip.save(function(err, trip) {
    if (err) { console.error(err);}
    return res.redirect('/trips')
  });
});

router.use('/:tripId/events', events)

module.exports = router;
