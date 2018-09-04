require('dotenv').config();
require('./config/database');
var Product = require('./models/Product');
var Order = require('./models/Order');

//['Protein', 'Pre', 'Amino', 'Vitamin']}

Promise.all([Product.remove({}), Order.remove({})])
.then(() => {
  Product.create([
    {name: 'ON Gold Standard Protein',
    icon:'https://i.imgur.com/jakVcUf.png', 
    shortdes:'The gold standard in protein with 24 grams of protein and essential amino acids for muscle growth.', 
    description: 'Whey protein isolates are the purest form of whey and the main ingredient in Gold Standard 100% Whey™. Each serving provides 24 grams of rapidly digesting whey protein with low levels of fat, cholesterol, lactose and other stuff you can do without making Gold Standard 100% Whey™ the standard all other proteins are measured against.', 
    price: 57.99, 
    prodListImage:'https://i.imgur.com/S6Qd7yy.jpg', 
    nutrImage:'https://i.imgur.com/uplRdBz.jpg', 
    prodShowImage:'https://i.imgur.com/cOh9iQZ.png',
    productType: 'Protein'
  },
    {name: 'Pre JYM',
    icon:'https://i.imgur.com/jGSoKm0.png', 
    shortdes:'Pre-workout powder made with 13 hand picked high qualitynode ingredients by Jim Stoppani.', 
    description: "Put simply, Pre JYM is the most effective pre-workout supplement I've ever developed. It's built on solid science and decades of professional experience. Nothing is hidden, and there is no filler. Pre JYM is research made real. It's pure pre-workout fuel.",
    price: 48.99, 
    prodListImage:'https://i.imgur.com/SQvRA7B.jpg', 
    nutrImage:'https://i.imgur.com/tC9kgTM.jpg', 
    prodShowImage:'https://i.imgur.com/z4gix9r.png',
    productType: 'Pre' 
  },
    {name: 'VitaMode',
    icon:'https://i.imgur.com/GjKBoLz.png', 
    shortdes:'High performance multi-vitamin with a full spectrum of necessary minerals to support well being.', 
    description: 'FULL SPECTRUM: One Serving Provides Daily Benefits across Key Multivitamins, Minerals, Antioxidants, Enzymes, Micronutrients and Phytonutrients to Support Bone, Eye, Immune, Skin and General Health.',
    price: 16.99, 
    prodListImage:'https://i.imgur.com/3TDb5Nt.jpg', 
    nutrImage:'https://i.imgur.com/7cPgbIH.jpg?1', 
    prodShowImage:'https://i.imgur.com/YnYX66l.png',
    productType: 'Vitamin' 
  },
    {name: 'Syntha-6',
    icon:'https://i.imgur.com/jakVcUf.png', 
    shortdes:'22g of Ultra-Premium blended protein for use whenever you see fit. Formulated with 10 grams of amino acids.', 
    description: 'SYNTHA-6® is an ultra-premium protein powder with 22g protein per serving and the best tasting BSN protein on the market. SYNTHA-6 is the go-to protein for any nutrition or exercise regimen because it is designed to suit a variety of active lifestyles and diet plans. And with SYNTHA-6, the high standard of quality protein comes with taste to match, thanks to the BSN exclusive flavor technology.', 
    price: 44.99, 
    prodListImage:'https://i.imgur.com/huDsgrr.jpg', 
    nutrImage:'https://i.imgur.com/5JlZ8Y1.png', 
    prodShowImage:'https://i.imgur.com/sKMf00Z.png',
    productType: 'Protein' 
  },
    {name: 'ON Micronized Creatine Powder',
    icon:'https://i.imgur.com/GjKBoLz.png', 
    shortdes:'99.9% Pure creatine powder with absolutely no fillers or additives. Your go to supplement to increase strength.', 
    description: ' From the raw materials we source to our state-of-the-art manufacturing processes, no compromises are made. You set the bar higher after every workout, we set the bar higher to redefine the industry standards and ensure you realize optimum results.', 
    price: 15.37, 
    prodListImage:'https://i.imgur.com/1oaNYud.jpg', 
    nutrImage:'https://i.imgur.com/FdKPodr.jpg?2', 
    prodShowImage:'https://i.imgur.com/ZCynQGO.png',
    productType: 'Vitamin' 
  },
    {name: 'Z-Elite',
    icon:'https://i.imgur.com/GjKBoLz.png', 
    shortdes:'All natural sleep aid that promotes muscle growth, and recovery. Made from a blend of proven minerals that help restful sleep.', 
    description: 'RSP Z-Elite is an all natural blend of Zinc Monomethionine Aspartate, Magnesium Aspartate, Vitamin B6 and Melatonin. These ingredients work together synergistically to support anabolic hormone levels within a normal range and promote restful sleep.', 
    price: 17.97, 
    prodListImage:'https://i.imgur.com/vm0FoA6.jpg', 
    nutrImage:'https://i.imgur.com/gNd2X4H.png', 
    prodShowImage:'https://i.imgur.com/BfGYfI2.jpg',
    productType: 'Vitamin' 
  },
    {name: 'Xtend',
    icon:'https://i.imgur.com/br4lSRb.png', 
    shortdes:'Intra-Workout powder packed with 7g of key amino acids for muscle recovery, and strength. The one and only Intra-Workout you will need.', 
    description: 'Build and preserve muscle with 7 GRAMS of hypercritical BCAAs — in the nature-designed and widely-researched 2:1:1 ratio — along with Glutamine and Citrulline Malate. Plus, with a proprietary blend of hydration-promoting electrolytes, Scivation XTEND is the delicious, refreshing, SUGAR-FREE way to help anyone grind through a grueling gym session.', 
    price: 29.99, 
    prodListImage:'https://i.imgur.com/VpuBUC6.jpg', 
    nutrImage:'https://i.imgur.com/O23GM2y.jpg', 
    prodShowImage:'https://i.imgur.com/cBvrq3H.png',
    productType: 'Amino' 
  },
    {name: 'C4 Original',
    icon:'https://i.imgur.com/jGSoKm0.png', 
    shortdes:'Advanced pre-workout made for anyone trying to increase energy, and focus. Great for those workouts that require you to have that extra push.', 
    description: 's America’s #1 selling pre-workout, C4 Original lives up to its solid reputation with a classic formula for advanced energy, endurance, focus and pumps!* But with a new bottle design and more delicious flavor options for you to choose from, you’ll feel like it’s your very first time experiencing the C4 you know and love.', 
    price: 29.99, 
    prodListImage:'https://i.imgur.com/jR3gxw2.jpg', 
    nutrImage:'https://i.imgur.com/M20Tb7s.jpg', 
    prodShowImage:'https://i.imgur.com/zws18Al.png',
    productType: 'Pre' 
  },
    {name: 'BCAA Energy',
    icon:'https://i.imgur.com/br4lSRb.png', 
    shortdes:'BCAA Powder with natural energy made from coffee and green tea to help with focus and speed up recovery.', 
    description: 'Fitness Enthusiasts and Athletes! BCAA Energy® has been designed to boost your anytime energy, recovery and performance needs whether they are before, in-between or after your workouts.', 
    price: 19.99, 
    prodListImage:'https://i.imgur.com/yq42V2M.jpg', 
    nutrImage:'https://i.imgur.com/M20Tb7s.jpg', 
    prodShowImage:'https://i.imgur.com/6CmMBon.png',
    productType: 'Amino' 
  },
    {name: 'N.O Xplode',
    icon:'https://i.imgur.com/jGSoKm0.png', 
    shortdes:'BCAA Powder with natural energy made from coffee and green tea to help with focus and speed up recovery.', 
    description: '275mg of caffeine, 1.8g of Beta-Alanine, and unrivaled focus. Get ready to slam plates longer and workout harder. BSN® has re-ignited N.O.-XPLODE®, the first complete pre-workout that launched in 2004 and has been helping athletes break through barriers ever since. Now with more energy, more feel, more focus, and amazing taste. The weights won’t know what hit them.', 
    price: 29.99, 
    prodListImage:'https://i.imgur.com/Jfoi2wi.jpg', 
    nutrImage:'https://i.imgur.com/O23GM2y.jpg', 
    prodShowImage:'https://i.imgur.com/I5JckzD.jpg',
    productType: 'Pre' 
  }

  ]).then(() => {
    process.exit();
  });
});

