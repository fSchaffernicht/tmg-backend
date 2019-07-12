const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const db = require('./connection')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  const collection = db.get('service_available')

  const isServiceAvailable = collection
    .find({ name: 'isServiceAvailable' })
    .then(r => {
      console.log('JLJKJLKJ', r)
    })
})

const PORT = process.env.PORT || 27017

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`)
})
