var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Got a GET request");
});

router.post('/', function(req, res, next) {
    const { body } = req.body;
    res.send("Got a POST request: " + body);
});

router.put('/', function(req, res, next) {
  res.send("Got a PUT request");
});

router.delete('/', function(req, res, next) {
    res.send("Got a DELETE request");
});

module.exports = router;
