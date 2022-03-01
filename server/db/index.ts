import { UserSchema } from '../model/userSchema'

export const registerUser = async (username, password) => {
  try {
    await UserSchema.create({
      username: username,
      password: password,
    }).then((response) => { console.log(response); })
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

export const test1 = (number1: number, number2: number) => {
  return (number1 + number2)
}