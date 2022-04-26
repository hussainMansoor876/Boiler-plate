const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const server = require('http').createServer(app)
const { mongoose } = require('./config')
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

require('dotenv').config()

const PORT = process.env.PORT || 4000

var db = mongoose.connection
db.on('error', (err) => {
  console.log('err', err)
})

db.on('open', function () {
  console.log('DB running')
})

io.on('connection', (socket) => {
  console.log('a user connected', socket.id)
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './client/build')))

app.use('/api', require('./routes'))

//set a static folder
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000
}))

app.use(express.json())

server.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`)
})