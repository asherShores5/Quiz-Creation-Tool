import ReactDOM from "react-dom";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage"
import HomePage from './pages/HomePage';
import CreateQuiz from "./pages/create-quiz/CreateQuiz";
import QuestionCreator from "./pages/create-quiz/question-creator/QuestionCreator";
import JoinPage from './pages/join/JoinPage';
import SearchQuiz from "./pages/join/search/SearchQuiz";
import JoinLogin from "./pages/join/login/JoinLogin";
import JoinSuccess from "./pages/join/login/JoinSuccess";
import JoinFailure from "./pages/join/login/JoinFailure";

import Todo from './components/Todo';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="create-quiz" element={<CreateQuiz />} />
          <Route path="create-quiz/question-creator" element={<QuestionCreator />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="join/search" element={<SearchQuiz />} />
          <Route path="join/login" element={<JoinLogin />} />
          <Route path="join/login/success" element={<JoinSuccess />} />
          <Route path="join/login/failure" element={<JoinFailure />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
