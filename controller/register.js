import { registerUser, findUserByUsername } from '../db/index.js'
import bcrypt from 'bcrypt'
import { json } from 'express'

export const getRegister = (req, res) => {
  res.render('register')
}

export const postRegister = async (req, res) => {
  findUserByUsername(req.body.username).then((result) => {
    if (result !== null) {
      res.redirect('/register')
    } else {
      bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
        registerUser(req.body.username, hashedPassword)
        res.redirect('/login')
      })
    }
  })
}
