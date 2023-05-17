import React from 'react'
import "./SideMenu.css"
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import { auth, db } from '../Server/firebase';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function SideMenu() {
  const navigate= useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      Swal.fire("Alert");
     navigate('/login');
      console.log("admin logout");
      // alert('Are you sure want to logout?')
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };
 
  return (
    <div className='center'>
      <ul>
        <Link to='/admin'style={{textDecoration:"none"}} className='link' >
        <li>
          <DashboardIcon className='icon'/>
          <span>Dashboard</span>
        </li>
        </Link>
        <Link to='/admintable' style={{textDecoration:"none"}} className='link'>
        <li>
        <AdminPanelSettingsIcon className='icon'/>
          <span>Admin-Panel</span>
        </li>
        </Link>
        <Link to="/donor" style={{textDecoration:"none"}} className='link'>
        <li>
          <PeopleIcon className='icon'/>
          <span>Donors</span>
        </li>
        </Link>
        <Link to="/message" style={{textDecoration:"none"}} className='link'>
        <li>
          <EmailIcon className='icon'/>
          <span>Messages</span>
        </li>
        </Link>
       
        <li onClick={handleLogout}  style={{ textDecoration: "none" }} className='link1'>
          <LogoutIcon className='icon'/>
          <span>Logout</span>
        </li>
        
      </ul>
    </div>
  )
}

export default SideMenu