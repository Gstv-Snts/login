import express from 'express'
import { postRegister } from '../controller/register.js'
import { getLogin } from '../controller/login.js'
import passport from 'passport'

const router = express.Router()

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}
router.post('/register', checkNotAuthenticated, postRegister)
router.post(
  '/login',
  checkNotAuthenticated,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
  })
)

export default router
