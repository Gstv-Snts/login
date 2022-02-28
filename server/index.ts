import express from 'express'
import router from './routes/index'
import mongoose from 'mongoose'
import { dbURL } from './config/config'
import helmet from 'helmet'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(express.urlencoded({ extended: false }))

const PORT = 5000

app.use('/', router)


mongoose
  .connect(dbURL)
  .then(() => {
    console.log('Conectado ao banco')
  })
  .then(() => {
    app.listen(PORT, console.log(`ABERTO EM http://localhost:${PORT}`))
  })
