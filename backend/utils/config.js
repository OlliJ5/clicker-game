require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI

console.log('portti', PORT)

module.exports = {
  PORT,
  MONGODB_URI
}