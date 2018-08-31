var express = require('express');
var router = express.Router();
var productsCtrl = require('../../controllers/products');

/*---------- Public Routes ----------*/
router.get('/', productsCtrl.index);
router.get('/:id', productsCtrl.getProduct);

/*---------- Protected Routes ----------*/
router.post('/cart', checkAuth, productsCtrl.addProduct);
router.delete('/cart/:id', checkAuth, productsCtrl.removeProduct);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authenticated'});
}

module.exports = router;