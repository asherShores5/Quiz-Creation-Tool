const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for instructor
const instructorSchema = new Schema({
  email: {
    type: String,
    required: [true, 'An email is required'],
  },
  password: {
    type: String,
    required: [true, 'A password is required'],
  },
});

// Create model for instructor
const Instructor = mongoose.model('instructor', instructorSchema);

module.exports = Instructor;