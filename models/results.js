const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for quiz
const resultsSchema = new Schema({
  studentName: {
    type: String,
    required: [true, 'A name is required'],
  },
  studentEmail: {
    type: String,
    required: [true, 'An email is required'],
  },
  answers: [
    {
      questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
      },
      answer: [{
        type: String,
        required: true,
      }],
    }
  ],
  dateSubmitted: {
    type: Date,
    default: Date.now,
  },
});

// Create model for quiz
const Results = mongoose.model('results', resultsSchema);

module.exports = Results;