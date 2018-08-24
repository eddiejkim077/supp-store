var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  quantity: Number,
  product: {type: Schema.Types.ObjectId, ref: 'Product'}
});

var orderSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User' },
  paid: Boolean,
  items: [itemSchema],
  total: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);