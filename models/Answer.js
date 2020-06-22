import mongoose from 'mongoose'

export const Answer = mongoose.model('Answer', {
  answerId: {
    type: Number,
  },
  text: {
    type: String,
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  },
  likes: {
    type: Number,
    default: 0
  },
  userId: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})