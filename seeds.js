require('dotenv').config();
require('./config/database');
var Product = require('./models/Product');

Product.remove({}).then(() => {
  Product.create([
    {name: 'Brotein', description: 'Lorem ipsum dolor amet before they sold out ugh celiac try-hard, tacos plaid aesthetic gentrify chicharrones hammock marfa intelligentsia drinking vinegar. Art party sartorial distillery mixtape fashion axe viral flannel DIY. Kinfolk lo-fi organic, tilde portland subway tile affogato copper mug blue bottle readymade iPhone crucifix. Single-origin coffee intelligentsia chillwave etsy actually chicharrones leggings banh mi shoreditch.' , price: 50, image:'https://i.imgur.com/m2K3azb.jpg' },
    {name: 'Bre-Workout', description: 'Mixtape hexagon pop-up authentic readymade mlkshk. Knausgaard trust fund 3 wolf moon vice cliche raclette jianbing iceland farm-to-table pour-over everyday carry ennui poutine. Kitsch yuccie art party, glossier kickstarter messenger bag ethical authentic unicorn wayfarers fam bitters tattooed raclette leggings. Blog hell of kitsch tote bag brunch pinterest farm-to-table tbh aesthetic locavore scenester retro.', price: 40, image:'https://i.imgur.com/m2K3azb.jpg' }
  ]).then(() => {
    process.exit();
  });
});

