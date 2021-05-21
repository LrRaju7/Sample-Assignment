//IMPORTING PACKAGES
const mongoose = require('mongoose');

const InputValuesSchema = new mongoose.Schema({
  sequence: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }

});

module.exports = Input = mongoose.model('input', InputValuesSchema);