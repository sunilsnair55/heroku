var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'My app',
     age:'25'

    });
});

router.get('/users', function(req, res, next) {
  res.render('index', {
     title: 'My app',
     age:'25'

    });
});
router.get('/test', function(req, res) {
  mongoose.model('test').find(function(err,test){
    res.send(test);
  })
});

module.exports = router;
