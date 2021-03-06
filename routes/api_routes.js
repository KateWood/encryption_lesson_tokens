var usersController = require('../controllers/users_controller.js')
   ,apiRouter       = require('express').Router()
   ,jwt				= require('jsonwebtoken')
   ,secret			= 'boom'

 apiRouter.route('/users')
  .post(usersController.createUser)
 apiRouter.use(function(req, res, next) {
 	var token = req.body.token || req.param('token') || req.headers['x-access-token']
 	if (token) {
 		jwt.verify(token, secret, function(err, decodedToken) {
 			if(err) res.json({message: "Cannot authenticate"})
 			req.decoded = decodedToken
 			next()
 		})
 	} else {
 		res.json({message: "No token provided."})
 	}
 })
 apiRouter.route('/users/:email')
  .get(usersController.findUser)
 apiRouter.route('/signin')
  .post(usersController.signIn)
module.exports = apiRouter
