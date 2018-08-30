var express = require('express');
var router = express.Router();
var ordersCtrl = require('../../controllers/orders');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/

router.get('/cart', checkAuth, ordersCtrl.getCart);

/*---------- Helper Functions ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authenticated'});
}
  


module.exports = router;