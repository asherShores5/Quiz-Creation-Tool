import ReactDOM from "react-dom";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage"
import HomePage from './pages/HomePage';
import CreateQuiz from "./pages/create-quiz/CreateQuiz";
import QuestionCreator from "./pages/create-quiz/question-creator/QuestionCreator";
import JoinPage from './pages/join/JoinPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="create-quiz" element={<CreateQuiz />} />
          <Route path="create-quiz/question-creator" element={<QuestionCreator />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
