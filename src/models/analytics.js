const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for analytics
const analyticsSchema = new Schema({
  quizID: {
    type: Schema.Types.ObjectId,
    ref: 'Quiz',
    required: [true, 'A Quiz ID is required'],
  },
  studentID: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: [true, 'A Student ID is required'],
  },
  totalCorrectAnswers: {
    type: Number,
    min: 0,
    max: 2147483647,
    required: [true, 'The total correct answers is required'],
  },
  totalSecondsLeft: {
    type: Number,
    min: 0,
    max: 2147483647,
    required: [true, 'The total seconds left is required'],
  },
  finalScore: {
    type: Number,
    min: 0,
    max: 2147483647,
    required: [true, 'The final score is required'],
  },
  isGameWon: {
    type: Boolean,
    required: [true, 'Must either win or not win, there is no in-between'],
    default: false,
  },
});

// Create model for analytics
const Analytics = mongoose.model('analytics', analyticsSchema);

module.exports = Analytics;