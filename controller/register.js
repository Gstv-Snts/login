import express from 'express'
import { registerUser, findUser } from '../db/index.js'
import bcrypt from 'bcrypt'

export const getRegister = (req, res) => {
  res.render('register')
}

export const postRegister = async (req, res) => {
  console.log(`Username: ${req.body.username}, password: ${req.body.password}`)
  console.log(findUser(req.body.username))
  try {
    await bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
      registerUser(req.body.username, hashedPassword)
    })
  } catch (error) {
    console.log(error)
  }
  res.redirect('/login')
}
