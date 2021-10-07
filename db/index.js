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

export const findUser = async (username) => {
  try {
    await UserSchema.findOne({ username: username }).then((user) => {
      return user.data
    })
  } catch (error) {
    console.log(error)
  }
}
