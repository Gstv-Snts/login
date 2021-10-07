import express from 'express'

export const getRegister = (req, res) => {
  res.render('register')
}

export const postRegister = (req, res) => {
  console.log(`Username: ${req.body.username}, password: ${req.body.password}`)
  res.redirect('/register')
}
