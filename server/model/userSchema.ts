import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
})
const sessionSchema = new mongoose.Schema({})

export const UserSchema = mongoose.model('users', userSchema)
export const SessionSchema = mongoose.model('sessions', sessionSchema)
