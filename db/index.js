import UserSchema from '../model/userSchema.js'

export const registerUser = async (username, password) => {
  if (await UserSchema.findOne({ username: username })) {
    return 'Usuario já exister'
  } else {
    try {
      await UserSchema.create({
        username: username,
        password: password,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
