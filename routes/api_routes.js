var usersController = require('../controllers/users_controller.js')
   ,apiRouter       = require('express').Router()

 apiRouter.route('/users')
  .post(usersController.createUser)
 apiRouter.route('/users/:email')
  .get(usersController.findUser)
 apiRouter.route('/signin')
  .post(usersController.signIn)
module.exports = apiRouter
