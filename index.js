import express from 'express'
import router from './routes/index.js'
import mongoose from 'mongoose'
import { dbURL, sessionSecret } from './config/secrets.js'
import session from 'express-session'
import { initialize } from './middleware/index.js'
import passport from 'passport'
import { findUserByUsername, findUserById } from './db/index.js'
import MongoStore from 'connect-mongo'
import flash from 'express-flash'

const app = express()

initialize(passport, findUserByUsername, findUserById)

app.use(express.urlencoded({ extended: false }))
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(flash())
app.use(
  session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: dbURL }),
  })
)
app.use(passport.initialize())
app.use(passport.session())

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
