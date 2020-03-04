const mongoose = require('mongoose');
const Gyms = require('../model.js');
const sampleData = require('./sampleData.json')


const seed = (data) => {
  Gyms.create(data)
    .then(() => {
      console.log('db seeded successfully');
      mongoose.connection.close();
    })
    .catch((err) => console.error(err));
};

seed(sampleData);
