// import React from 'react';
// import Todo from './components/Todo';
// import './App.css';

// const App = () => {
//   return (
//     <div className="App">
//       <Todo />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Layout";
import NoPage from "./pages/NoPage"
import HomePage from './pages/HomePage';
import CreateQuiz from "./pages/CreateQuiz";
import QuestionCreator from "./pages/QuestionCreator";
import JoinPage from './pages/JoinPage';
import SearchQuiz from "./pages/SearchQuiz";
import JoinLogin from "./pages/JoinLogin";
import JoinSuccess from "./pages/JoinSuccess";
import JoinFailure from "./pages/JoinFailure";
import LogInAccount from './pages/LogInAccount';

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
          <Route path="LogInAccount" element={<LogInAccount />} />
          <Route path="*" element={<NoPage />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}