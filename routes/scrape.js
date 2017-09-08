var express = require('express')
var router = express.Router()
var superagent = require('superagent')
// var geoip = require("geoip-native");

// var geoip = require('geoip-lite');
 
// var ip = "52.221.173.98";
// var geo = geoip.lookup(ip);
 
// console.log(geo);

router.get('/', function(req, res, next) {

	//var url = 'https://bis999.com/#/sports/main'
	//var url = 'https://betkorea.com/#/sports/result'
	var url = 'https://www.vevo.com/'
	//var url = 'https://www.youtube.com/'
	//var url = 'https://stackoverflow.com/questions/30712141/connect-to-localhost3000-from-another-computer-expressjs-nodejs'

	superagent
	.get(url)
	.query()
	.end(function(err, response){
		if (err){
			res.json({
				confirmation: 'fail',
				message:err
			})
			return
		}
		res.send(response.text)
	})

  // res.json ({
  // 	confirmation:'success'

  // })

})

module.exports = router;
