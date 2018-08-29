require('dotenv').config();
require('./config/database');
var Product = require('./models/Product');

Product.remove({}).then(() => {
  Product.create([
    {name: 'Gold Standard 100% Whey Protein', description: 'Lorem ipsum dolor amet before they sold out ugh celiac try-hard, tacos plaid aesthetic gentrify chicharrones hammock marfa intelligentsia drinking vinegar. Art party sartorial distillery mixtape fashion axe viral flannel DIY. Kinfolk lo-fi organic, tilde portland subway tile affogato copper mug blue bottle readymade iPhone crucifix. Single-origin coffee intelligentsia chillwave etsy actually chicharrones leggings banh mi shoreditch.' , price: 50, image:'https://i.imgur.com/vLWOMF8.jpg', image2:'https://i.imgur.com/uplRdBz.jpg', image3:'https://i.imgur.com/AMsZ5zp.jpg' , image4:'https://i.imgur.com/8xeUSS6.png', image5:'' },
    {name: 'Pre JYM', description: 'Mixtape hexagon pop-up authentic readymade mlkshk. Knausgaard trust fund 3 wolf moon vice cliche raclette jianbing iceland farm-to-table pour-over everyday carry ennui poutine. Kitsch yuccie art party, glossier kickstarter messenger bag ethical authentic unicorn wayfarers fam bitters tattooed raclette leggings. Blog hell of kitsch tote bag brunch pinterest farm-to-table tbh aesthetic locavore scenester retro.', price: 40, image:'https://i.imgur.com/eeLNjPY.jpg', image2:'https://i.imgur.com/tC9kgTM.jpg', image4:'https://i.imgur.com/KXA1Alf.jpg' }
  ]).then(() => {
    process.exit();
  });
});

