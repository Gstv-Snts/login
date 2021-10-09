import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
})

export default mongoose.model('users', userSchema)
