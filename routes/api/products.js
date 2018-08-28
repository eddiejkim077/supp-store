var express = require('express');
var router = express.Router();
var productsCtrl = require('../../controllers/products');

/*---------- Public Routes ----------*/
router.get('/', productsCtrl.index);
router.post('/cart', productsCtrl.addProduct);
router.delete('/cart', productsCtrl.removeProduct);


/*---------- Protected Routes ----------*/




module.exports = router;