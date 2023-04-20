import React from 'react'
import "./SideMenu.css"
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';


function SideMenu() {
  return (
    <div className='center'>
      <ul>
        <Link to='/admin' >
        <li>
          <DashboardIcon className='icon'/>
          <span>Dashboard</span>
        </li>
        </Link>
        <Link to='/admintable' style={{textDecoration:"none"}}>
        <li>
        <AdminPanelSettingsIcon/>
          <span>Admin-Panel</span>
        </li>
        </Link>
        <Link to="/donor" style={{textDecoration:"none"}}>
        <li>
          <PeopleIcon className='icon'/>
          <span>Donors</span>
        </li>
        </Link>
        <Link to="/" style={{textDecoration:"none"}}>
        <li>
          <SettingsIcon className='icon'/>
          <span>Settings</span>
        </li>
        </Link>
        <Link to="/message" style={{textDecoration:"none"}}>
        <li>
          <EmailIcon className='icon'/>
          <span>Messages</span>
        </li>
        </Link>
        <Link to="" style={{textDecoration:"none"}}>
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