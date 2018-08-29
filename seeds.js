require('dotenv').config();
require('./config/database');
var Product = require('./models/Product');

Product.remove({}).then(() => {
  Product.create([
    {name: 'Gold Standard 100% Whey Protein',
    icon:'https://i.imgur.com/jakVcUf.png', 
    shortdes:'The gold standard in protein with 24 grams of protein and essential amino acids', 
    description: 'Lorem ipsum dolor amet before they sold out ugh celiac try-hard, tacos plaid aesthetic gentrify chicharrones hammock marfa intelligentsia drinking vinegar. Art party sartorial distillery mixtape fashion axe viral flannel DIY. Kinfolk lo-fi organic, tilde portland subway tile affogato copper mug blue bottle readymade iPhone crucifix. Single-origin coffee intelligentsia chillwave etsy actually chicharrones leggings banh mi shoreditch.', 
    price: 50, 
    prodListImage:'https://i.imgur.com/vLWOMF8.jpg', 
    nutrImage:'https://i.imgur.com/uplRdBz.jpg', 
    prodShowImage:'https://i.imgur.com/cOh9iQZ.png'
  },
    {name: 'Pre JYM',
    icon:'https://i.imgur.com/jGSoKm0.png', 
    shortdes:'Pre-workout powder made with 13 hand picked high qualitynode ingredients by Jim Stoppani', 
    description: 'Mixtape hexagon pop-up authentic readymade mlkshk. Knausgaard trust fund 3 wolf moon vice cliche raclette jianbing iceland farm-to-table pour-over everyday carry ennui poutine. Kitsch yuccie art party, glossier kickstarter messenger bag ethical authentic unicorn wayfarers fam bitters tattooed raclette leggings. Blog hell of kitsch tote bag brunch pinterest farm-to-table tbh aesthetic locavore scenester retro.', 
    price: 40, 
    prodListImage:'https://i.imgur.com/eeLNjPY.jpg', 
    nutrImage:'https://i.imgur.com/tC9kgTM.jpg', 
    prodShowImage:'https://i.imgur.com/KXA1Alf.jpg' 
  },
    {name: 'VitaMode',
    icon:'https://i.imgur.com/GjKBoLz.png', 
    shortdes:'High performance multi-vitamin with a full spectrum of necessary minerals to support well being', 
    description: 'Mixtape hexagon pop-up authentic readymade mlkshk. Knausgaard trust fund 3 wolf moon vice cliche raclette jianbing iceland farm-to-table pour-over everyday carry ennui poutine. Kitsch yuccie art party, glossier kickstarter messenger bag ethical authentic unicorn wayfarers fam bitters tattooed raclette leggings. Blog hell of kitsch tote bag brunch pinterest farm-to-table tbh aesthetic locavore scenester retro.', 
    price: 16.99, 
    prodListImage:'https://i.imgur.com/H00ITMY.jpg', 
    nutrImage:'https://i.imgur.com/7cPgbIH.jpg', 
    prodShowImage:'https://i.imgur.com/etyxS9P.png' 
  },
    {name: 'Syntha-6',
    icon:'https://i.imgur.com/jakVcUf.png', 
    shortdes:'22g of Ultra-Premium blended protein for use whenever you see fit. Formulated with 10 grams of amino acids', 
    description: 'Mixtape hexagon pop-up authentic readymade mlkshk. Knausgaard trust fund 3 wolf moon vice cliche raclette jianbing iceland farm-to-table pour-over everyday carry ennui poutine. Kitsch yuccie art party, glossier kickstarter messenger bag ethical authentic unicorn wayfarers fam bitters tattooed raclette leggings. Blog hell of kitsch tote bag brunch pinterest farm-to-table tbh aesthetic locavore scenester retro.', 
    price: 44.99, 
    prodListImage:'https://i.imgur.com/huDsgrr.jpg', 
    nutrImage:'https://i.imgur.com/5JlZ8Y1.png', 
    prodShowImage:'https://i.imgur.com/sKMf00Z.png' 
  },
    {name: 'VitaMode',
    icon:'https://i.imgur.com/GjKBoLz.png', 
    shortdes:'High performance multi-vitamin with a full spectrum of necessary minerals to support well being', 
    description: 'Mixtape hexagon pop-up authentic readymade mlkshk. Knausgaard trust fund 3 wolf moon vice cliche raclette jianbing iceland farm-to-table pour-over everyday carry ennui poutine. Kitsch yuccie art party, glossier kickstarter messenger bag ethical authentic unicorn wayfarers fam bitters tattooed raclette leggings. Blog hell of kitsch tote bag brunch pinterest farm-to-table tbh aesthetic locavore scenester retro.', 
    price: 16.99, 
    prodListImage:'https://i.imgur.com/H00ITMY.jpg', 
    nutrImage:'https://i.imgur.com/7cPgbIH.jpg', 
    prodShowImage:'https://i.imgur.com/etyxS9P.png' 
  },
    {name: 'VitaMode',
    icon:'https://i.imgur.com/GjKBoLz.png', 
    shortdes:'High performance multi-vitamin with a full spectrum of necessary minerals to support well being', 
    description: 'Mixtape hexagon pop-up authentic readymade mlkshk. Knausgaard trust fund 3 wolf moon vice cliche raclette jianbing iceland farm-to-table pour-over everyday carry ennui poutine. Kitsch yuccie art party, glossier kickstarter messenger bag ethical authentic unicorn wayfarers fam bitters tattooed raclette leggings. Blog hell of kitsch tote bag brunch pinterest farm-to-table tbh aesthetic locavore scenester retro.', 
    price: 16.99, 
    prodListImage:'https://i.imgur.com/H00ITMY.jpg', 
    nutrImage:'https://i.imgur.com/7cPgbIH.jpg', 
    prodShowImage:'https://i.imgur.com/etyxS9P.png' 
  }

  ]).then(() => {
    process.exit();
  });
});

