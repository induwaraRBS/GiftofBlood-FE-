import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import LoginJs from './Pages/Login/Login';  
import Home from './Pages/Home/Home';
import Header from './Components/Header';
import About from './Pages/Aboutus/About';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
        <Router>
          <Header/>
          <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<LoginJs />}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
  );
}

export default App;
