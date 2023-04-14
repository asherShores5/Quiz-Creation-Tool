const express = require('express');
const router = express.Router();
const Question = require('../models/question');
const Quiz = require('../models/quiz');
const { getStudents, getStudentById, createStudent, updateStudent, deleteStudent, loginStudent} = require('../models/student');
const { createInstructor, loginInstructor, logoutInstructor } = require('../models/instructor');
const { getSections, getSectionById, createSection, updateSection, deleteSection} = require('../models/section');
const QuizAnalytics = require('../models/analytics');
const Results = require('../models/results')


// RESTful API for questions

// Get all questions
router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one question
router.get('/questions/:id', getQuestion, (req, res) => {
  res.json(res.question);
});

// Create one question
router.post('/questions', async (req, res) => {
  const question = new Question({
    questionNumber: req.body.questionNumber,
    prompt: req.body.prompt,
    answers: req.body.answers,
    correctAnswers: req.body.correctAnswers,
    questionType: req.body.questionType,
    timeLimit: req.body.timeLimit
  });
  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one question
router.patch('/questions/:id', getQuestion, async (req, res) => {
  if (req.body.questionNumber != null) {
    res.question.questionNumber = req.body.questionNumber;
  }
  if (req.body.prompt != null) {
    res.question.prompt = req.body.prompt;
  }
  if (req.body.answers != null) {
    res.question.answers = req.body.answers;
  }
  if (req.body.correctAnswers != null) {
    res.question.correctAnswers = req.body.correctAnswers;
  }
  if (req.body.questionType != null) {
    res.question.questionType = req.body.questionType;
  }
  if (req.body.timeLimit != null) {
    res.question.timeLimit = req.body.timeLimit;
  }
  try {
    const updatedQuestion = await res.question.save();
    res.json(updatedQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one question
router.delete('/questions/:id', getQuestion, async (req, res) => {
  try {
    await res.question.remove();
    res.json({ message: 'Question deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a single question by ID
async function getQuestion(req, res, next) {
  try {
    question = await Question.findById(req.params.id);
    if (question == null) {
      return res.status(404).json({ message: 'Cannot find question' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.question = question;
  next();
}

// RESTful API for quiz results

// Get all quiz results
router.get('/results', async (req, res) => {
  try {
    const quizResults = await Results.find();
    res.json(quizResults);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one quiz result by ID
router.get('/results/:id', getQuizResult, (req, res) => {
  res.json(res.quizResult);
});

// Create one quiz result
router.post('/results', async (req, res) => {
  const quizResult = new Results({
    studentName: req.body.studentName,
    studentEmail: req.body.studentEmail,
    answers: req.body.answers,
  });
  try {
    const newQuizResult = await quizResult.save();
    res.status(201).json(newQuizResult);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one quiz result
router.patch('/results/:id', getQuizResult, async (req, res) => {
  if (req.body.studentName != null) {
    res.quizResult.studentName = req.body.studentName;
  }
  if (req.body.studentEmail != null) {
    res.quizResult.studentEmail = req.body.studentEmail;
  }
  if (req.body.answers != null) {
    res.quizResult.answers = req.body.answers;
  }
  try {
    const updatedQuizResult = await res.quizResult.save();
    res.json(updatedQuizResult);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one quiz result
router.delete('/results/:id', getQuizResult, async (req, res) => {
  try {
    await res.quizResult.remove();
    res.json({ message: 'Quiz result deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get quiz result by ID
async function getQuizResult(req, res, next) {
  let quizResult;
  try {
    quizResult = await Results.findById(req.params.id);
    if (quizResult == null) {
      return res.status(404).json({ message: 'Quiz result not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.quizResult = quizResult;
  next();
}


// RESTful API for quizzes

// Get all quizzes
router.get('/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one quiz
router.get('/quizzes/:id', getQuiz, (req, res) => {
  res.json(res.quiz);
});

// Create a quiz
router.post('/quizzes', async (req, res) => {
  const quiz = new Quiz({
    title: req.body.title,
    description: req.body.description,
    timeLimit: req.body.timeLimit,
    questions: req.body.questions,
    createdBy: req.body.createdBy,
  });

  try {
    const newQuiz = await quiz.save();
    res.status(201).json(newQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a quiz
router.patch('/quizzes/:id', getQuiz, async (req, res) => {
  if (req.body.title != null) {
    res.quiz.title = req.body.title;
  }
  if (req.body.description != null) {
    res.quiz.description = req.body.description;
  }
  if (req.body.timeLimit != null) {
    res.quiz.timeLimit = req.body.timeLimit;
  }
  if (req.body.questions != null) {
    res.quiz.questions = req.body.questions;
  }

  try {
    const updatedQuiz = await res.quiz.save();
    res.json(updatedQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a quiz
router.delete('/quizzes/:id', getQuiz, async (req, res) => {
  try {
    await res.quiz.remove();
    res.json({ message: 'Quiz deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get quiz results
router.get('/quizzes/:id/results', getQuiz, async (req, res) => {
  try {
    const quizResults = await res.quiz.getResults();
    res.json(quizResults);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start quiz
router.post('/quizzes/:id/start', getQuiz, async (req, res) => {
  try {
    await res.quiz.start();
    res.json({ message: 'Quiz started' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Stop quiz
router.post('/quizzes/:id/stop', getQuiz, async (req, res) => {
  try {
    await res.quiz.stop();
    res.json({ message: 'Quiz stopped' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get quiz by ID
async function getQuiz(req, res, next) {
  let quiz;
  try {
    quiz = await Quiz.findById(req.params.id);
    if (quiz == null) {
      return res.status(404).json({ message: 'Cannot find quiz' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.quiz = quiz;
  next();
}


// RESTful API for Sections

// Get all sections
router.get('/', async (req, res) => {
  try {
    const sections = await getSections();
    res.json(sections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single section
router.get('/:id', getSection, (req, res) => {
  res.json(res.section);
});

// Create a section
router.post('/', async (req, res) => {
  const section = new Section({
    name: req.body.name,
    description: req.body.description,
    questions: req.body.questions,
  });
  try {
    const newSection = await createSection(section);
    res.status(201).json(newSection);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a section
router.patch('/:id', getSection, async (req, res) => {
  if (req.body.name != null) {
    res.section.name = req.body.name;
  }
  if (req.body.description != null) {
    res.section.description = req.body.description;
  }
  if (req.body.questions != null) {
    res.section.questions = req.body.questions;
  }
  try {
    const updatedSection = await updateSection(res.section);
    res.json(updatedSection);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a section
router.delete('/:id', getSection, async (req, res) => {
  try {
    await deleteSection(res.section);
    res.json({ message: 'Section has been deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get section by id
async function getSection(req, res, next) {
  try {
    const section = await getSectionById(req.params.id);
    if (section == null) {
      return res.status(404).json({ message: 'Cannot find section' });
    }
    res.section = section;
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  next();
}


// RESTful API for Quiz Analytics

// Get all quiz analytics
router.get('/quiz-analytics', async (req, res) => {
  try {
    const quizAnalytics = await QuizAnalytics.find();
    res.json(quizAnalytics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one quiz analytics
router.get('/quiz-analytics/:id', getQuizAnalytics, (req, res) => {
  res.json(res.quizAnalytics);
});

// Create quiz analytics
router.post('/quiz-analytics', async (req, res) => {
  const quizAnalytics = new QuizAnalytics(req.body);
  try {
    const newQuizAnalytics = await quizAnalytics.save();
    res.status(201).json(newQuizAnalytics);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update quiz analytics
router.put('/quiz-analytics/:id', getQuizAnalytics, async (req, res) => {
  if (req.body.completedQuiz) {
    res.quizAnalytics.completedQuiz = req.body.completedQuiz;
  }
  if (req.body.questionsAnswered) {
    res.quizAnalytics.questionsAnswered = req.body.questionsAnswered;
  }
  if (req.body.score) {
    res.quizAnalytics.score = req.body.score;
  }
  try {
    const updatedQuizAnalytics = await res.quizAnalytics.save();
    res.json(updatedQuizAnalytics);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete quiz analytics
router.delete('/quiz-analytics/:id', getQuizAnalytics, async (req, res) => {
  try {
    await res.quizAnalytics.remove();
    res.json({ message: 'Quiz analytics deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get one quiz analytics by id
async function getQuizAnalytics(req, res, next) {
  let quizAnalytics;
  try {
    quizAnalytics = await QuizAnalytics.findById(req.params.id);
    if (quizAnalytics == null) {
      return res.status(404).json({ message: 'Cannot find quiz analytics' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.quizAnalytics = quizAnalytics;
  next();
}


// Create instructor
router.post('/instructors', async (req, res) => {
  try {
    const instructor = await createInstructor(req.body);
    res.status(201).json(instructor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login instructor
router.post('/instructors/login', async (req, res) => {
  try {
    const instructor = await loginInstructor(req.body);
    res.json(instructor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Logout instructor
router.get('/instructors/logout', async (req, res) => {
  try {
    await logoutInstructor(req, res);
    res.status(200).json({ message: 'Successfully logged out' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// RESTful API for Students

// Get all students
router.get('/students', async (req, res) => {
  try {
    const students = await getStudents();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get student by id
router.get('/students/:id', async (req, res) => {
  try {
    const student = await getStudentById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a student
router.post('/students', async (req, res) => {
  try {
    const student = await createStudent(req.body);
    res.status(201).json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update a student
router.put('/students/:id', async (req, res) => {
  try {
    const student = await updateStudent(req.params.id, req.body);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete a student
router.delete('/students/:id', async (req, res) => {
  try {
    const student = await deleteStudent(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Login a student
router.post('/students/login', async (req, res) => {
  try {
    const student = await loginStudent(req.body.email, req.body.password);
    if (!student) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    req.session.studentId = student._id;
    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Logout a student
router.get('/students/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.json({ message: 'Logged out successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Final export
module.exports = router;