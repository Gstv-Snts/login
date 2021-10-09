import session from 'express-session'
import MongoStore from 'connect-mongo'
import bcrypt from 'bcrypt'
import { sessionSecret, dbURL } from '../config/secrets.js'
import { findUserByUsername } from '../db/index.js'

export const createSession = (username) => {
  session({
    secret: sessionSecret,
    store: MongoStore.create({ mongoUrl: dbURL }),
  })
}

export const login = async (username, password) => {
  const user = await findUserByUsername(username)
  if (user !== null && (await bcrypt.compare(password, user.password))) {
    return true
  } else {
    return false
  }
}
