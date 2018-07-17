const express = require('express');
const router = express.Router();

const auth = require('./helpers/auth');
const Trip = require('../models/trip');

// Rooms Index
router.get('/', (req, res, next) =>{
  res.render('/',);
})
