import UserSchema from '../model/userSchema.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

export const registerUser = async (username, password) => {
  try {
    await UserSchema.create({
      username: username,
      password: password,
    })
  } catch (error) {
    console.log(error)
  }
}

export const findUserByUsername = async (username) => {
  return await UserSchema.findOne({ username })
}

export const compareHashedPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword)
}

export const login = async (username, password) => {
  const user = await findUserByUsername(username)
  if (user !== null) {
    const passAuth = await compareHashedPassword(password, user.password)
    return passAuth
  } else {
    return false
  }
}
