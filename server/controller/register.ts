import { registerUser, findUserByUsername } from '../db/index'
import bcrypt from 'bcrypt'
export const postRegister = async (req, res) => {
  console.log(req.body.username);
  console.log(req.body.password);
  try {
    findUserByUsername(req.body.username).then(async (dbRes) => { // PROCURA O USUARIO MANDADO
      if (dbRes !== null) { // SE O USUARIO FOR NULL
        console.log(dbRes);
        res.status(200)
        res.json({ message: "usuario já existe" })
      } else { // SE O USUARIO EXISTE
        console.log(dbRes);
        const hashedPassword = bcrypt(req.body.password, 10) // CRIPTOGRAFA A SENHA
        registerUser(req.body.username, hashedPassword) //REGISTRA O USUARIO NO BANCO
        res.status(200)
        res.json({ message: "cadastrado com sucesso" })
      }
    })
  } catch (e) { console.log(e.message); }
}
