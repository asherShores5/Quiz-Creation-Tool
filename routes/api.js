const express = require('express');
const router = express.Router();
const Question = require('../models/question');

// GET RESTful API
router.get('/questions', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Question.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});

// POST RESTful API
router.post('/questions', (req, res, next) => {
  if (req.body.action) {
    Question.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The question is incomplete or empty',
    });
  }
});

// DELETE RESTful API
router.delete('/questions/:id', (req, res, next) => {
  Question.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;