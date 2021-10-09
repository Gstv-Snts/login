import { login, createSession } from '../middleware/index.js'

export const getLogin = (req, res) => {
  res.render('login')
}

export const postLogin = async (req, res) => {
  console.log(`Username: ${req.body.username}, password: ${req.body.password}`)
  if (await login(req.body.username, req.body.password)) {
    createSession
    res.redirect('/login')
  } else {
    res.redirect('/login')
  }
}
