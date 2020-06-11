import mongoose from 'mongoose'

export const Question = mongoose.model('Question', {
    questionId: {
      type: Number
    },
    title: {
      type: String,
    },
    question: {
      type: String
    },
    likes: {
      type: Number,
      default: 0
    },
    userId: {
      type:mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    answer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Answer'
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  })