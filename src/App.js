import React, { useContext } from 'react';
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
import Protectedroute from './Server/security/Protectedroute';
import { Authcontext } from './Server/context/Authcontext';
import Admin from './Pages/Admin/Admin';
import Donortable from './Components/Tables/Donortable';
import Messagetable from './Components/Tables/Messagetable';
import Admintable from './Components/Tables/Admintable';
import Newstable from './Components/Tables/Newstable';

function App() {

   
    
    const {currentUser} = useContext(Authcontext)
    
  return (
    <><div className='page-container'>
      <div className='content-wrap'>
       
       
      
      <Header />
    
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LoginJs />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={ <Protectedroute> <Contact /> </Protectedroute> } />
        <Route path='/profile' element={ <Protectedroute> <Profile /> </Protectedroute> } />
        <Route path='/admin' element={ <Protectedroute> <Admin /> </Protectedroute> } />
        {/* Components routing */}
        <Route path='/donor' element={<Donortable/>}/>
        <Route path='/message' element={<Messagetable/>}/>
        <Route path='/admintable' element={<Admintable/>}/>
        <Route path='/news' element={<Newstable/>}/>
        {/* Done */}
        <Route exact path="/" element={<Home />} />
      </Routes>
   
      <Footer />
    
    </div>
      </div></>
  );
}

export default App;
