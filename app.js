import express from 'express'
import request from 'superagent'

const app = express()

app.get('/', (req, res) => {
  const response = { message: 'Hello from our api!' }
  res.json(response)
})

app.get('/new-endpoint', (req, res) => {
  const response = { message: 'This is our new endpoint' }
  res.json(response)
})

app.get('/fetch-data', async (req, res) => {
  try {
    const response = await request.get('https://dog.ceo/api/breeds/image/random')
    res.json(response.body)
  } catch (err) {
    res.status(400).send(err)
  }
})

export default app

