var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  username: String,
  review: String, 
}, {
  timestamps: true 
});

var productSchema = new mongoose.Schema({
  name: {type: String, required: true },
  description: String,
  price: { type: Number, default: 0 },
  reviews: [reviewSchema]
})

module.exports = mongoose.model('Product', productSchema);