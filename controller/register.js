import express from 'express'
import { registerUser, findUser } from '../db/index.js'
import bcrypt from 'bcrypt'

export const getRegister = (req, res) => {
  res.render('register')
}

export const postRegister = async (req, res) => {
  console.log(`Username: ${req.body.username}, password: ${req.body.password}`)
  findUser(req.body.username).then((result) => {
    if (result !== null) {
      console.log('Usuario ja existe')
      res.redirect('/register')
    } else {
      bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
        registerUser(req.body.username, hashedPassword)
        res.redirect('/login')
      })
    }
  })
}
