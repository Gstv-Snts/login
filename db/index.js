import UserSchema from '../model/userSchema.js'

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
