var express = require('express')
var router = express.Router()
var superagent = require('superagent')


router.get('/', function(req, res, next) {
var url = 'https://betkorea.com/#/sports/result'
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
