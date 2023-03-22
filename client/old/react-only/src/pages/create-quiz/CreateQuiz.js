import React from 'react';
import Question from './Question';
import { Link } from "react-router-dom";
import "./CreateQuiz.css";
import "./Question.css";

class CreateQuiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        { id: 1, title: "Question 1", imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fsmall-question-mark-icon-20.png&f=1&nofb=1&ipt=c853c31c3af3a4fded301d9993604a53c672e5a2252e57e71eab3c8d9c6edbe7&ipo=images" },
        { id: 2, title: "Question 2", imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fsmall-question-mark-icon-20.png&f=1&nofb=1&ipt=c853c31c3af3a4fded301d9993604a53c672e5a2252e57e71eab3c8d9c6edbe7&ipo=images" },
        { id: 3, title: "Question 3", imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fsmall-question-mark-icon-20.png&f=1&nofb=1&ipt=c853c31c3af3a4fded301d9993604a53c672e5a2252e57e71eab3c8d9c6edbe7&ipo=images" },
      ],
      newQuestionId: 4,
      quizName: "",
      backgroundMusic: "standard",
    };
  }

  handleAddQuestion = () => {
    const newQuestion = { id: this.state.newQuestionId, title: `Question ${this.state.newQuestionId}`, imageUrl: "" };
    this.setState({
      questions: [...this.state.questions, newQuestion],
      newQuestionId: this.state.newQuestionId + 1,
    });
  };

  handleQuizNameChange = (event) => {
    this.setState({ quizName: event.target.value });
  };

  handleBackgroundMusicChange = (event) => {
    this.setState({ backgroundMusic: event.target.value });
  };

  render() {
    const questionList = this.state.questions.map((question) => (
      <Question
        key={question.id}
        title={question.title}
        imageUrl={ "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fsmall-question-mark-icon-20.png&f=1&nofb=1&ipt=c853c31c3af3a4fded301d9993604a53c672e5a2252e57e71eab3c8d9c6edbe7&ipo=images"}
      />
    ));

    return (
      <div>
        <h1>Create a Quiz</h1>
        <label>
          Quiz Name:
          <input type="text" name="quiz-name" value={this.state.quizName} onChange={this.handleQuizNameChange} />
        </label>
        <label>
          Background Music:
          <select name="background-music" value={this.state.backgroundMusic} onChange={this.handleBackgroundMusicChange}>
            <option value="standard">Standard Version</option>
            <option value="jazz">Jazz Version</option>
            <option value="epic">Epic Version</option>
          </select>
        </label>
        <div className="question-list">{questionList}</div>
        <button className="add-question-button" onClick={this.handleAddQuestion}>
          Add a question
        </button>
        <Link to="/">
          <button className="save-button" type="button">Save</button>
        </Link>
        
      </div>
    );
  }
}

export default CreateQuiz;