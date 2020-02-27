const mongoose = require('mongoose')

const counterSchema = mongoose.Schema({
  value: Number
})

const Counter = mongoose.model('Score', counterSchema)

const scoreRouter = require('express').Router()

scoreRouter.post('/click', async (request, response) => {
  //make a counter if one isn't found
  // const counter = new Counter({
  //   value: 1
  // })

  const counter = await Counter.findOne({})
  console.log('counter', counter)
  const value = counter.value + 1
  let prize = -1

  //get the prize for the user if there is one
  if(value % 500 === 0) {
    prize = 250
  } else if(value % 100 === 0) {
    prize = 40
  } else if(value % 10 === 0) {
    prize = 5
  }

  //get the amount of clicks for the next prize
  //always at most 10 clicks away

  const clicksToWin = 10 - (value % 10)

  counter.value = value
  await counter.save()

  response.json({ prize, clicksToWin })
})

module.exports = scoreRouter