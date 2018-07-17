const express = require('express');
const router = express.Router();

const auth = require('./helpers/auth');
const Trip = require('../models/trip');

// Trips Index
<<<<<<< HEAD
router.get('/', (req, res, next) => {
  res.render('/');
})
=======
router.get('/', (req, res, next) =>{
  Trip.find({}, (err, trip) => {
    if (err) {
      console.log(err);
    }

    res.render('trips/index', {
      trip: trip
    });
  });
});
>>>>>>> 606ba593f78d848c6e897e7ebf28e76c6dc59766

//Trips Create
router.post('/', auth.requireLogin, (req, res, next) => {
    let trip = new Trip(req.body);

    trip.save(function(err, room) {
      if(err) { console.error(err) };

      return res.redirect('/trips');
    });
  });

//Trip new
router.get('/new', auth.requireLogin, (req, res, next) => {
  res.render('trips/new');
});

//Trip edit
router.get(':id/edit', auth.requireLogin, (req, res, next) => {
  Trip.findById(req.params.id, (err, trip) => {
    if (err) {console.error(err)};

    res.render('trips/edit', {trip: trip});
    })
});

//Trip show
router.get('/:id', auth.requireLogin, (req, res, next) => {
    Trip.findById(req.params.id, (err, trip) => {
      if(err) { console.error(err) };

      res.render('trips/show', { trip: trip });
    });
  });

module.exports = router;
