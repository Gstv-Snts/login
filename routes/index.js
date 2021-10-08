import express from 'express'
import { getRegister, postRegister } from '../controller/register.js'
import { getLogin, postLogin } from '../controller/login.js'
import { getMainPage } from '../controller/mainpage.js'

const router = express.Router()

router.get('/register', getRegister)
router.post('/register', postRegister)
router.get('/login', getLogin)
router.post('/login', postLogin)
router.get('/', getMainPage)

export default router
