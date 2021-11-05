var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// /* GET 'about' page*/

// const about = (req,res)=>{res.render('index',{title:"about"});};

// module.exports={
//   about
// };
