const mongoose = require('mongoose');
const db = require('./index');

const gymSchema = mongoose.Schema({
  name: String,
  rating: Number,
  address: String,
  city: String,
  zipCode: Number
});

const Gyms = mongoose.model('gyms', gymSchema);

module.exports = {
  get: (zipCode) => Gyms.find({ zipCode }),
};