import express from 'express'
import { postRegister } from '../controller/register.js'
import { postLogin } from '../controller/login.js'

const router = express.Router()


router.post('/register', postRegister)
router.post('/login', postLogin)

export default router
