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
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/login" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/login">Donor</a></li>
            <li><a class="dropdown-item" href="#">Admin</a></li>
          </ul>
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
