const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema ({
  name: { type: String, required: true},
  date: {type: Date, default: Date.now},
  datefrom: {type: Date, required: true},
  dateto: {type: Date, required: true},
  totalCost: {type: Number},
  users: [{ type: Schema.Types.ObjectId, ref: 'User'}]
});    

module.exports = mongoose.model('Trip', TripSchema);
