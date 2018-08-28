var express = require('express');
var router = express.Router();
var ordersCtrl = require('../../controllers/orders');

/*---------- Public Routes ----------*/

router.get('/cart', ordersCtrl.getCart);


/*---------- Protected Routes ----------*/




module.exports = router;