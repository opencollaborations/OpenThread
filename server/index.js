import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import { createCanvas, loadImage } from 'canvas'
import dotenv from 'dotenv'
import {treads} from './routes/tread.js'
import { auth } from './routes/auth.js'

dotenv.config()
console.log(process.env.mongodb)
const app = express()

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/treads',treads)
app.use('/auth',auth)

const port = process.env.port || 3001

app.get('/he', (req, res) => {
 res.send('hel')
})

app.get('/', (req, res) => {
 try {
  // Create a new canvas with a white background
  const canvas = createCanvas(300, 100)
  const context = canvas.getContext('2d')
  const color = req.query.color || '#00000000' // set default color to white
  context.fillStyle = color
  context.fillRect(0, 0, canvas.width, canvas.height)

  // Add text to the image
  context.font = '16px Arial'
  context.fillStyle = '#343A40'
  context.fillText(req.query.text, 50, 50)

  // Convert the canvas to a data URL
  const dataUrl = canvas.toDataURL()

  // Send the image as a response
  // res.send('hello')
  res.writeHead(200, { 'Content-Type': 'image/png' })
  const buffer = new Buffer.from(dataUrl.split(',')[1], 'base64')
  res.end(buffer)
 } catch (err) {
  console.error(err)
  res.status(500).send('An error occurred')
 }
})

mongoose
 .connect(process.env.mongodb, {
    dbName:"treadsdata",
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
 .then(() =>
  app.listen(port, () =>
   console.log(`Server Running on Port: http://localhost:${port}`)
  )
 )
 .catch(error => console.log(`${error} did not connect`))
