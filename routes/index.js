var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Opening page */
router.get('/whichcafe', function(req, res) {
    res.render('whichcafe', { title: 'WhichCafe?'});
});

/* GET Cafelist page */
router.get('/cafelist', function(req, res) {
    var db = req.db;
    var collection = db.get('cafecollection');
    collection.find({},{},function(e,docs){
        res.render('cafelist', {
            "cafelist" : docs
        });
    });
});

module.exports = router;
