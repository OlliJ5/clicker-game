const mongoose = require('mongoose')

const counterSchema = mongoose.Schema({
  value: Number
})

const Counter = mongoose.model('Counter', counterSchema)

const counterRouter = require('express').Router()

counterRouter.get('/', async (request, response) => {
  const counters = await Counter.find({})
  response.json(counters)
})

counterRouter.post('/click', async (request, response) => {
  const counter = await Counter.findOne({})

  const value = counter.value + 1
  let prize = 0

  //get the prize for the user if there is one
  if (value % 500 === 0) {
    prize = 250
  } else if (value % 100 === 0) {
    prize = 40
  } else if (value % 10 === 0) {
    prize = 5
  }

  //get the amount of clicks for the next prize
  //always at most 10 clicks away
  const clicksToWin = 10 - (value % 10)

  counter.value = value
  await counter.save()

  response.json({ prize, clicksToWin })
})

module.exports = { counterRouter, Counter }