import express from 'express'
import { postRegister } from '../controller/register'
import { postLogin } from '../controller/login'

const router = express.Router()


router.post('/register', postRegister)
router.post('/login', postLogin)

export default router
