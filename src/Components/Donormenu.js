import React from 'react'
import "./Donormenu.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../Server/firebase';




function SideMenu() {

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Call the signOut method from Firebase Auth
      navigate('/login'); // Redirect to the login page after successful logout
      console.log("user logout");
      alert('Are you sure want to logout?')
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };


  return (
    <div className='center1'>
      <ul>
        <Link to='/Profile/:id'style={{textDecoration:"none"}} className='link' >
        <li>
          <DashboardIcon className='icon'/>
          <span>Profile</span>
        </li>
        </Link>
        
        
        <li onClick={handleLogout} style={{ textDecoration:"none"  }} className='link1'>
          <LogoutIcon className='icon'/>
          <span>Logout</span>
        </li>
      </ul>
    </div>
  )
}

export default SideMenu