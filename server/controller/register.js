import { registerUser, findUserByUsername } from '../db/index.js'
import bcrypt from 'bcrypt'

export const postRegister = async (req, res) => {
  findUserByUsername(req.body.username).then((result) => {
    if (result !== null) {
      console.log("digita alguma coisa kekweijk");
      res.status(404)
    } else {
      bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
        registerUser(req.body.username, hashedPassword)
        res.status(200);
        console.log("usaurio criadoowedkd");
      })
    }
  })
}
