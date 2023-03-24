const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for question
const questionSchema = new Schema({
  questionNumber: {
    type: Number,
    min: 0,
    max: 2147483647,
    required: [true, 'A question number is required'],
  },
  prompt: {
    type: String,
    required: [true, 'The title field is required'],
  },
  questionType: {
    type: String,
    required: [true, 'The question type field is required'],
  },
  timeLimit: {
    type: Number,
    minimum: 15,
    maximum: 60,
    required: [true, 'The question type field is required'],
  },
  answers: {
    type: [String],
    required: [true, 'At least one answer is required'],
  },
  correctAnswers: {
    type: [String],
    required: [true, 'At least one correct answer is required'],
  },
});

// Create model for question
const Question = mongoose.model('question', questionSchema);

module.exports = Question;