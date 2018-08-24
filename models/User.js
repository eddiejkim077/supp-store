var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  address: {type: String, required: true},
  phone: {type: Number, required: true}
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema);