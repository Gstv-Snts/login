import UserSchema from '../model/userSchema.js'
import mongoose from 'mongoose'

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

export const findUser = async (username) => {
  return await UserSchema.findOne({ username })
}
