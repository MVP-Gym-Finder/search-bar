const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/gyms', { useNewUrlParser: true })
  .then(() => console.log('mongoose connected'))
  .catch((err) => console.error(err));

module.exports = db;