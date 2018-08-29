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
  reviews: [reviewSchema],
  image: String,
  image2: String,
  image3: String,
  image4: String
})

module.exports = mongoose.model('Product', productSchema);