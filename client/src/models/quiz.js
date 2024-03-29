const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for quiz
const quizSchema = new Schema({
  instructorID: {
    type: Schema.Types.ObjectId,
    ref: 'Instructor',
    required: [true, 'An instructor ID is required'],
  },
  quizName: {
    type: String,
    required: [true, 'A quiz name is required'],
  },
  musicName: {
    type: String,
    required: [true, 'A music name field is required'],
    default: "Default",
  },
  sections: [{
    type: Schema.Types.ObjectId,
    ref: 'Question',
    required: [true, 'At least one section is required'],
  }],
  isActive: {
    type: Boolean,
    required: [true, 'Must be active or not'],
    default: false,
  },
  musicName: {
    type: String,
    required: false,
  },
  isRunning: {
    type: Boolean,
    required: [true, 'Must be running or not'],
    default: false,
  },
});

// Create model for quiz
const Quiz = mongoose.model('quiz', quizSchema);

module.exports = Quiz;