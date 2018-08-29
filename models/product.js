var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  username: String,
  review: String, 
}, {
  timestamps: true 
});

var productSchema = new mongoose.Schema({
  name: {type: String, required: true },
  shortdes: String,
  description: String,
  price: { type: Number, default: 0 },
  reviews: [reviewSchema],
  icon: String,
  prodListImage: String,
  nutrImage: String,
  prodShowImage: String
})

module.exports = mongoose.model('Product', productSchema);