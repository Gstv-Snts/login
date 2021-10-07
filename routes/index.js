import express from 'express'
import { getRegister, postRegister } from '../controller/register.js'

const router = express.Router()

router.get('/register', getRegister)
router.post('/register', postRegister)

export default router
