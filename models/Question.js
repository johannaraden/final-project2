import mongoose from 'mongoose'

export const Question = mongoose.model('Question', {
    questionId: {
      type: Number
    },
    title: {
      type: String,
    },
    question: {
      type: String,
      // minlength: 30
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
    answer: [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Answer'
    }
    ],
    createdAt: {
      type: Date,
      default: Date.now()
    }
  })
