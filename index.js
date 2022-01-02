const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.get('/users', (req, res) => {
  res.send('<h1>Hello Users</h1>')
})

const port = process.env.port || 4000

app.listen(port, () => {
  console.log('Server Started')
})
