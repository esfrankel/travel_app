const express = require('express');
const router = express.Router();

const auth = require('./helpers/auth');
const Trip = require('../models/trip');

<<<<<<< HEAD
router.get('/', (req, res, next) => {
  Trip.find({}, 'topic', function(err, trips) {
    if (err) {
      console.error(err);
    }
    res.render('trips/index', { trips: trips });
  });
=======
// Trips Index
router.get('/', (req, res, next) =>{
 Trip.find({}, (err, trip) => {
   if (err) {
     console.log(err);
   }

   res.render('trips/index', {
     trip: trip
   });
 });
>>>>>>> 1f41df01b65fc8298392c67fb4a8b153d9ec6b83
});

router.get('/new', (req, res, next) =>{
  res.render('trips/new')
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

module.exports = router;
