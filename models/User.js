import mongoose, { Schema } from 'mongoose'
import crypto from 'crypto'

export const User = mongoose.model('User', {
  name: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  },
  answers: 
    {
      type: [Schema.Types.ObjectId],
      ref: 'Answer'
  },
  questions: [
    {
      type: [Schema.Types.ObjectId],
      ref: 'Question'
  }
  ]
})