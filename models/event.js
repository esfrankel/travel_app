const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: { type: String, required: true },
  date: { type: String},
  time: { type: String},
  loc: { type: String},
  price: { type: Number },
  trip: { type: Schema.Types.ObjectId, ref: 'Trip'},
});

module.exports = mongoose.model('Event', EventSchema);
