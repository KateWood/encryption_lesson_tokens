var express   =  require('express')
  , app       =  express()
  , logger    =  require('morgan')
  , bodyParser=  require('body-parser')
  , mongoose  =  require('mongoose')
  , apiRouter =  require('./routes/api_routes.js')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

mongoose.connect('mongodb://localhost/encrypt', function(){
  console.log('Mongodb connected to db:encrypt')
})

app.use('/api',apiRouter)
app.listen(3000, function(){
  console.log('API running on port 3000')
})

