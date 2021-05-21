//IMPORTING PACKAGES
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  phone: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }

});

module.exports = User = mongoose.model('user', UserSchema);