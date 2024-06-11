import './App.css';
import { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Login from './pages/login/Login';
import VerifyAccount from './pages/verify_account/VerifyAccount';
import { BaseUrl } from './BaseUrl';

export const LoginContext = createContext()

function App() {
  useEffect(() => {
    function refreshTokens() {
      if(localStorage.refresh) {
        const url = BaseUrl + 'api/token/refresh';
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            refresh: localStorage.refresh,
          }),
        })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          localStorage.acceess = data.access;
          localStorage.refresh = data.refresh;
          setLoggedIn(true);
        });
      }
    }
    const minute = 1000 * 60
    refreshTokens();
    setInterval(refreshTokens, minute * 3);
  }, []);

  const [loggedIn, setLoggedIn] = useState(
    localStorage.access ? true : false
  );
  
  function changeLoggedIn(value) {
    setLoggedIn(value);
    if (value === false) {
      localStorage.clear(); // specify what to clear in local storage when creating dark mode
    }
  };

  return (
    <LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/verify_account' element={<VerifyAccount />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
