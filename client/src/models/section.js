const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for section
const sectionSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The section name is required'],
  },
  sectionNumber: {
    type: Number,
    min: 0,
    max: 2147483647,
    required: [true, 'The section number is required'],
  },
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Question',
    required: [true, 'At least one question is required'],
  }],
});

// Create model for section
const Section = mongoose.model('section', sectionSchema);

module.exports = Section;