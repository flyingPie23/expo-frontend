import React from 'react';
import ReactDOM from 'react-dom/client';
import './assests/application.scss';

import App from './pages/App.tsx';
import Feed from "./pages/Feed.tsx"
import LoginPage from './pages/LoginPage.tsx';
import SignupPage from './pages/SignupPage.tsx';
import { axiosInstance, isSignedIn} from "./scripts/axiosConfig.tsx"

import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={isSignedIn(axiosInstance) ? <Feed/> : <App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
