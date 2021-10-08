import { findUserByUsername, login } from '../db/index.js'
import bcrypt from 'bcrypt'

export const getLogin = (req, res) => {
  res.render('login')
}

export const postLogin = async (req, res) => {
  console.log(`Username: ${req.body.username}, password: ${req.body.password}`)
  if (await login(req.body.username, req.body.password)) {
    res.redirect('/')
  } else {
    res.redirect('/login')
  }
}
