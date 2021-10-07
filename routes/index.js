import express from 'express'
import { getRegister, postRegister } from '../controller/register.js'
import { getLogin, postLogin } from '../controller/login.js'

const router = express.Router()

router.get('/register', getRegister)
router.post('/register', postRegister)
router.get('/login', getLogin)
router.post('/login', postLogin)
router.get('/', (req, res) => {
  res.redirect('/register')
})

export default router
