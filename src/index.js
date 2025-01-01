import React, { useState, useEffect }  from 'react';
import ReactDOM from 'react-dom/client';
import './assests/application.scss';

import App from './pages/App.tsx';
import Feed from "./pages/Feed.tsx"
import LoginPage from './pages/LoginPage.tsx';
import SignupPage from './pages/SignupPage.tsx';
import { isSignedIn } from "./scripts/authHandler.tsx";

import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));


const RenderApp = () => {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const checkSignInStatus = async () => {
      const result = await isSignedIn();
      setSignedIn(result);
    };

    checkSignInStatus();
  }, []);


  return signedIn ? <Feed /> : <App />;
};

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<RenderApp />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
