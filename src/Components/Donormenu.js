import React from 'react'
import "./Donormenu.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';


function SideMenu() {
  return (
    <div className='center'>
      <ul>
        <Link to='/Profile'style={{textDecoration:"none"}} className='link' >
        <li>
          <DashboardIcon className='icon'/>
          <span>Profile</span>
        </li>
        </Link>
        <Link to='/healthinfo' style={{textDecoration:"none"}} className='link'>
        <li>
        <HealthAndSafetyIcon className='icon'/>
          <span>Health Infromations</span>
        </li>
        </Link>
        <Link to="/accountinfo" style={{textDecoration:"none"}} className='link'>
        <li>
          <AccountCircleIcon className='icon'/>
          <span>Account Informations</span>
        </li>
        </Link>
        {/* <Link to="/message" style={{textDecoration:"none"}} className='link'>
        <li>
          <EmailIcon className='icon'/>
          <span>Messages</span>
        </li>
        </Link> */}
        <Link to="" style={{textDecoration:"none"}} className='link'>
        <li>
          <LogoutIcon className='icon'/>
          <span>Logout</span>
        </li>
        </Link>
      </ul>
    </div>
  )
}

export default SideMenu