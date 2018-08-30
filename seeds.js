require('dotenv').config();
require('./config/database');
var Product = require('./models/Product');
var Order = require('./models/Order');

Promise.all([Product.remove({}), Order.remove({})])
.then(() => {
  Product.create([
    {name: 'ON Gold Standard 100% Whey Protein',
    icon:'https://i.imgur.com/jakVcUf.png', 
    shortdes:'The gold standard in protein with 24 grams of protein and essential amino acids for muscle growthno', 
    description: 'Lorem ipsum dolor amet before they sold out ugh celiac try-hard, tacos plaid aesthetic gentrify chicharrones hammock marfa intelligentsia drinking vinegar. Art party sartorial distillery mixtape fashion axe viral flannel DIY. Kinfolk lo-fi organic, tilde portland subway tile affogato copper mug blue bottle readymade iPhone crucifix. Single-origin coffee intelligentsia chillwave etsy actually chicharrones leggings banh mi shoreditch.', 
    price: 50, 
    prodListImage:'https://i.imgur.com/S6Qd7yy.jpg', 
    nutrImage:'https://i.imgur.com/uplRdBz.jpg', 
    prodShowImage:'https://i.imgur.com/cOh9iQZ.png'
  },
    {name: 'Pre JYM',
    icon:'https://i.imgur.com/jGSoKm0.png', 
    shortdes:'Pre-workout powder made with 13 hand picked high qualitynode ingredients by Jim Stoppani', 
    description: 'Mixtape hexagon pop-up authentic readymade mlkshk. Knausgaard trust fund 3 wolf moon vice cliche raclette jianbing iceland farm-to-table pour-over everyday carry ennui poutine. Kitsch yuccie art party, glossier kickstarter messenger bag ethical authentic unicorn wayfarers fam bitters tattooed raclette leggings. Blog hell of kitsch tote bag brunch pinterest farm-to-table tbh aesthetic locavore scenester retro.', 
    price: 40, 
    prodListImage:'https://i.imgur.com/SQvRA7B.jpg', 
    nutrImage:'https://i.imgur.com/tC9kgTM.jpg', 
    prodShowImage:'https://i.imgur.com/z4gix9r.png' 
  },
    {name: 'VitaMode',
    icon:'https://i.imgur.com/GjKBoLz.png', 
    shortdes:'High performance multi-vitamin with a full spectrum of necessary minerals to support well being', 
    description: 'Mixtape hexagon pop-up authentic readymade mlkshk. Knausgaard trust fund 3 wolf moon vice cliche raclette jianbing iceland farm-to-table pour-over everyday carry ennui poutine. Kitsch yuccie art party, glossier kickstarter messenger bag ethical authentic unicorn wayfarers fam bitters tattooed raclette leggings. Blog hell of kitsch tote bag brunch pinterest farm-to-table tbh aesthetic locavore scenester retro.', 
    price: 16.99, 
    prodListImage:'https://i.imgur.com/3TDb5Nt.jpg', 
    nutrImage:'https://i.imgur.com/7cPgbIH.jpg', 
    prodShowImage:'https://i.imgur.com/YnYX66l.png' 
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
    {name: 'ON Micronized Creatine Powder',
    icon:'https://i.imgur.com/GjKBoLz.png', 
    shortdes:'99.9% Pure creatine powder with absolutely no fillers or additives. Your go to supplement to increase strength', 
    description: 'Mixtape hexagon pop-up authentic readymade mlkshk. Knausgaard trust fund 3 wolf moon vice cliche raclette jianbing iceland farm-to-table pour-over everyday carry ennui poutine. Kitsch yuccie art party, glossier kickstarter messenger bag ethical authentic unicorn wayfarers fam bitters tattooed raclette leggings. Blog hell of kitsch tote bag brunch pinterest farm-to-table tbh aesthetic locavore scenester retro.', 
    price: 15.37, 
    prodListImage:'https://i.imgur.com/1oaNYud.jpg', 
    nutrImage:'https://i.imgur.com/FdKPodr.jpg', 
    prodShowImage:'https://i.imgur.com/ZCynQGO.png' 
  },
    {name: 'Z-Elite',
    icon:'https://i.imgur.com/GjKBoLz.png', 
    shortdes:'All natural sleep aid that promotes muscle growth, and recovery. Made from a blend of proven minerals that help restful sleep.', 
    description: 'Mixtape hexagon pop-up authentic readymade mlkshk. Knausgaard trust fund 3 wolf moon vice cliche raclette jianbing iceland farm-to-table pour-over everyday carry ennui poutine. Kitsch yuccie art party, glossier kickstarter messenger bag ethical authentic unicorn wayfarers fam bitters tattooed raclette leggings. Blog hell of kitsch tote bag brunch pinterest farm-to-table tbh aesthetic locavore scenester retro.', 
    price: 17.97, 
    prodListImage:'https://i.imgur.com/vm0FoA6.jpg', 
    nutrImage:'https://i.imgur.com/gNd2X4H.png', 
    prodShowImage:'https://i.imgur.com/BfGYfI2.jpg' 
  }

  ]).then(() => {
    process.exit();
  });
});

