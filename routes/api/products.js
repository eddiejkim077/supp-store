var express = require('express');
var router = express.Router();
var productsCtrl = require('../../controllers/products');

/*---------- Public Routes ----------*/
router.get('/', productsCtrl.index);
router.get('/:id', productsCtrl.getProduct);
router.post('/cart', productsCtrl.addProduct);
router.delete('/cart/:id', productsCtrl.removeProduct);

/*---------- Protected Routes ----------*/




module.exports = router;