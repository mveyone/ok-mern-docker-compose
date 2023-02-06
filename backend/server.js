require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect('mongodb://admin:password@mongodb?authSource=admin', { useNewUrlParser: true } ) // with docker 'mongoose.connect('mongodb://admin:password@mongodb/blogs?authSource=admin' + localhost we use localhost
.then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  const port = 4000;
  app.listen(port, ()=> {
    console.log(('server running on port 4000!'));
  });
  