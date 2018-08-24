require('dotenv').config();
require('./config/database');
var Product = require('./models/Product');

Product.remove({}).then(() => {
  Product.create([
    {name: 'Brotein', description: '' , price: 50 },
    {name: 'Bre-Workout', description: '', price: 40 }
  ]).then(() => {
    proces.exit();
  });
});