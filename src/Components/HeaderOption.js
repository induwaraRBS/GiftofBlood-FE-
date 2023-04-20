import React from 'react'
import './HeaderOption.css';



function HeaderOption() {
  return (
    <nav className='navbar'>
        <ul>
          <li classname="active" >
            <a classname="nav-link" href='/'>Home</a>
          </li>
        </ul>
        <ul>
          <li >
            <a  classname="nav-link"href='/about'>About Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a classname="nav-link" href='/contact'>Contact</a>
          </li>
        </ul>
        <ul>
          <li>
            <a classname="nav-link" href='/profile'>Profile</a>
          </li>
        </ul>
        <ul>
        <li>
          <a className='nav-link' href='/login'>Login</a>
        </li>
        </ul>
        <ul>
          <li >
            <a classname="nav-link" href='/signup'>Register</a>
          </li>
        </ul>
        <ul>
          <li >
            <a classname="nav-link" href='/news'>News</a>
          </li>
        </ul>
      
    </nav>
  )
}

export default HeaderOption
