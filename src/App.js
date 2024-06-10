import './App.css';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Login from './pages/login/Login';

export const LoginContext = createContext()

function App() {
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
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
