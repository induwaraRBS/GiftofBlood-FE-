import React from 'react'
import './HeaderOption.css';

function HeaderOption() {
  return (
    <nav className='navbar'>
        <ul>
          <li classname="nav-item" >
            <a classname="nav-link" href='#'>Home</a>
          </li>
        </ul>
        <ul>
          <li classname="nav-item">
            <a  classname="nav-link"href='#'>About Us</a>
          </li>
        </ul>
        <ul>
          <li classname="nav-item">
            <a classname="nav-link" href='#'>Contact</a>
          </li>
        </ul>
        <ul>
          <li>
            <a classname="nav-link" href='#'>Profile</a>
          </li>
        </ul>
        <ul>
          <li classname="nav-item">
            <a classname="nav-link" href='#'>Register</a>
          </li>
        </ul>
        <ul>
          <li classname="nav-item">
            <a classname="nav-link" href='#'>News</a>
          </li>
        </ul>
      
    </nav>
  )
}

export default HeaderOption
