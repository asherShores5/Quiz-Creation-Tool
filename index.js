const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
require('dotenv').config("./");

const app = express()

const port = process.env.PORT || 5000;
let db = process.env.DB === undefined ? "mongodb+srv://rewesch:9aBq1lXz7UHSEtDs@quiz-creation-tool.5rkpzzw.mongodb.net/quiz_data?retryWrites=true&w=majority" : process.env.DB;
console.log(db);
// Connect to the database
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//need to connect to mongo