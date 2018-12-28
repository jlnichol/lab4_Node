var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res) {
  res.sendFile('weather.html', { root: 'lab-4-node-jlnichol' });
});

module.exports = router;
