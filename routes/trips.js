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
    res.render('trips/index', { trips: trips, events: events });
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
      .sort({ _id:-1})
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
  });
});


router.post('/', auth.requireLogin, (req, res, next) => {
  const trip = new Trip(req.body);

  trip.users.push(req.session.userId);

  const usernames = req.body.share.split(", ");

  console.log(usernames);

  // Promise.all([p,p,p]).then().catch()
  const findUsers = [];

  for (let i = 0; i < usernames.length; i += 1) {
    const username = usernames[i];
    const user = User.findOne({ username });
    // User.find({username: username}, function(error, friend) {
    //   trip.users.push(friend[0]._id);
    // });
  }

  Promise.all(findUsers).then((users) => {
    for (let i = 0; i < users.length; i += 1) {
      if (users[i] !== null) {
        trip.users.push(users[i]);
      }
    }
    return trip.save();
  }).then((trip) => {
    return res.redirect('/trips');
  }).catch((err) => {
    console.log(err.message);
  });

  // trip.save(function(err, trip) {
  //   console.log(trip);
  //   if (err) { console.error(err);}
  //   return res.redirect('/trips')
  // });
});

router.use('/:tripId/events', events)

module.exports = router;
