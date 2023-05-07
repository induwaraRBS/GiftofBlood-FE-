import React from 'react'
import SideMenu from '../../Components/SideMenu'
import './Admin.css'
import Widgets from '../../Components/Widgets'
import Newstable from '../../Components/Tables/Newstable'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'


function Admin() {
  return (
    <div className='home'>
        <SideMenu/>
      
        <div className='homeContainer'>
   
          <div className='Widgets'>
            <Widgets type="Donor"/>
            <Widgets type="Admins"/>
            <Widgets type="Messages"/>
          </div>
          
          <div className='newstable'> 
          <hr></hr>
          <div className='newstitle'>  
          <h3>News</h3>
          <Link to={'/addnews'}>
          <Button  variant="outlined" color="success">
            Add new
          </Button>
          </Link>
          </div>
          <hr></hr>
            <Newstable/>
          </div>
        </div>
    </div>
  )
}

export default Admin