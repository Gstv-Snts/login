import express from 'express'
import { getRegister, postRegister } from '../controller/register.js'
import { getLogin } from '../controller/login.js'
import { getMainPage, disconnectUser } from '../controller/mainpage.js'
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

router.get('/register', checkNotAuthenticated, getRegister)
router.post('/register', checkNotAuthenticated, postRegister)
router.get('/login', checkNotAuthenticated, getLogin)
router.post(
  '/login',
  checkNotAuthenticated,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
  })
)
router.get('/', checkAuthenticated, getMainPage)
router.post('/logout', disconnectUser)

export default router
