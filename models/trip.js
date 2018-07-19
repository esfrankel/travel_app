const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema ({
  name: { type: String, required: true},
  users: [{ type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Trip', TripSchema);
