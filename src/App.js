import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import LoginJs from './Pages/Login/Login';  
import Home from './Pages/Home/Home';
import Header from './Components/Header';
import About from './Pages/Aboutus/About';
import Signup from './Pages/Signup/Signup';
import News from './Pages/News/News';
import Contact from './Pages/Contact/Contact';
import Profile from './Pages/Profile/Profile';
import Footer from './Components/Footer';
import { AuthContextProvider } from './Server/context/Authcontext';


function App() {
  return (
    <><div className='page-container'>
      <div className='content-wrap'>
       
       
      
      <Header />
     <AuthContextProvider>   
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LoginJs />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      </AuthContextProvider>
      <Footer />
    
    </div>
      </div></>
  );
}

export default App;
