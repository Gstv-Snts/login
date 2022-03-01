import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  Id: {
    type: String,
    unique: true,
    index: true,
    required: true,
  },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
})

export const UserSchema = mongoose.model('users', userSchema)
