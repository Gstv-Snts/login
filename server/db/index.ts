import { SessionSchema, UserSchema } from '../model/userSchema'

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
export const findUserById = async (id) => {
  return await UserSchema.findOne({ id })
}
