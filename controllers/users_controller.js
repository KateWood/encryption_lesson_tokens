var User = require('../models/user.js')

function create(req, res){
  var user = new User(req.body.user)
  user.save(function(err){
    if(err) res.json({ err: err})
    res.json({ message: 'User Created!'})
  })
}
function show(req, res){
  User.find({email: req.params.email},function(err,user){
    if(err) res.json({err: err})
    res.json(user)
  })
}
function signIn(req,res){
  User.findOne({ email: req.body.email} , function(err,user){
    if(err) res.json({err: err})
    if(user){
      if(user.authenticate(req.body.password))
        res.json({ message: "valid user"})
      else
        res.json({ message: "invalid user"})
    }
    else
      res.json({ message: "user not found"})
  })
}


module.exports = {
  createUser: create,
  findUser: show,
  signIn: signIn
}
