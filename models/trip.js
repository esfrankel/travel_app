const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema ({
  name: { type: String, required: true},
});

module.exports = mongoose.model('Trip', TripSchema);
