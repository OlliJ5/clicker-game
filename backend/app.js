const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const counter = require('./counter')

const app = express()

console.log('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('connected to MongoDB')
    const Counter = counter.Counter

    const counterExists = await Counter.findOne({})

    //make a counter if there isn't one
    if (!counterExists) {
      console.log('luodaan uusi countteri')
      const newCounter = new Counter({
        value: 0
      })
      newCounter.save()
    }
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })


app.use(bodyParser.json())
app.use(morgan('tiny'))

app.use('/counter', counter.counterRouter)

module.exports = app