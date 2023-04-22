import React from 'react';
import "./Header.css";
import HeaderOption from './HeaderOption';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Header() {
  return (
    <div className='header'>

        <div className='header__left'>
            <img src='https://static.vecteezy.com/system/resources/previews/007/063/118/original/blood-drop-isolated-on-white-background-free-vector.jpg'
            alt='LOGO'/>
            <div className='header__text'>
              <h4>GIFT OF BLOOD</h4>
            </div>
            
        </div>
        <div className='header__right'>
           <HeaderOption/>
          

        </div>

    </div>
  )
}

export default Header
