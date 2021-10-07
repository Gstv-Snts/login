import express from 'express'

export const getLogin = (req, res) => {
  res.render('login')
}

export const postLogin = (req, res) => {
  console.log(`Username: ${req.body.username}, password: ${req.body.password}`)
}
