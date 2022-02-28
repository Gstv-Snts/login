import { findUserByUsername, findUserById } from '../db/index'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { tokenSecret } from '../config/config'
export const postLogin = async (req, res, nex) => {
  try {

    console.log(req.body);
    const user = await findUserByUsername(req.body.username)
    if (user === null) {
      res.json({ status: "usuario não existe" })
    }
    const passwordMatch = await bcrypt.compare(req.body.password, user.password)
    console.log(passwordMatch);
    if (!passwordMatch) {
      res.json({ status: "senha incorreta" })
    } else {
      const token = jwt.sign({
        username: user.username
      }, tokenSecret)
      res.json({ status: "usuario correto", user: token })
    }
    res.status(200)
  } catch (error) {
    console.log(error.message);
  }
}
