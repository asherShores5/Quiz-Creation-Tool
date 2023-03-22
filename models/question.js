const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for question
const questionSchema = new Schema({
  questionNumber: {
    type: Number,
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
  }
});

// Create model for todo
const Question = mongoose.model('question', questionSchema);

module.exports = Question;