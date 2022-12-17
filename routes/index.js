var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mongoose Airlines' });
});

// router.get('/', function(req, res, next) {
//   res.redirect('/flights');
// });

module.exports = router;
