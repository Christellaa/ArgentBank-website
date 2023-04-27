import React from 'react';
import {Routes, Route} from'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Home />}/>
      <Route path='/sign-in' element= {<SignIn />}/>
      <Route path='/user' element= {<User />}/>
    </Routes>
  );
}

export default App;
