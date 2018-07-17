const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  date: { type: String},
  loc: { type: String},
  price: { type: Number}
});

module.exports = mongoose.model('Event', EventSchema);
