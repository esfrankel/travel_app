const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema ({
  name: { type: String, required: true},
  desc: { type: String, required: true},
  events: [{ type: Schema.Types.ObjectId }]
});

module.exports = mongoose.model('Trip', TripSchema);
