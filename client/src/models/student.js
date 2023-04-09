const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for student
const studentSchema = new Schema({
  email: {
    type: String,
    required: [true, 'An email is required'],
  },
  password: {
    type: String,
    required: [true, 'A password is required'],
  },
  realName: {
    type: String,
    required: [true, 'The real name is required'],
  },
  displayName: {
    type: String,
    required: [true, 'The display name is required'],
  },
  identifierTag: {
    type: String,
    required: [true, 'The id tag is required'],
  },
});

// Create model for student
const Student = mongoose.model('student', studentSchema);

module.exports = Student;