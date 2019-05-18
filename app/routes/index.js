var express = require('express');
var router = express.Router();

var HomeController = require('../controllers/HomeController.js');

router.get('/home', HomeController.home);
router.get('/work', HomeController.work);

module.exports = router;
