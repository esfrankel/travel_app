const express = require('express');
const User = require('../models/user');
const auth = require('./helpers/auth')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
