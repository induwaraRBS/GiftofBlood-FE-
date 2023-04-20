import React from 'react'
import SideMenu from '../SideMenu';
import "./Admintable.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Admintable() {
  const rows = [
    {
      id:1000,
      firstName:"yashoda",
      lastName:"Ranathunga",
      email:"yash@admin.com",
      userType:'Admin',
      dateOfBirth:'1999-12-09',
      contact:'071111992',
      location:'Diyathalawa',
      nicNumber:'137187234917',
    },
    {
      id:1001,
      firstName:"neesha",
      lastName:"veemansa",
      email:"neesh@donor.com",
      userType:'Donor',
      dateOfBirth:'1999-05-22',
      contact:'071111792',
      location:'Bandarawla',
      nicNumber:'137187254',
    }
  ]
  return (
   <div className='Page'>
      <SideMenu/>
      <div className='table'>
        <div className='Filter'>
            <h3>Admin Table</h3>
            <hr></hr>
        </div>  
        <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Id</TableCell>
            <TableCell className='tableCell'>First Name</TableCell>
            <TableCell className='tableCell'>last Name</TableCell>
            <TableCell className='tableCell'>Email</TableCell>
            <TableCell className='tableCell'>UserType</TableCell>
            <TableCell className='tableCell'>Date Of Birth</TableCell>
            <TableCell className='tableCell'>Contact</TableCell>
            <TableCell className='tableCell'>Location</TableCell>
            <TableCell className='tableCell'>NIC</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell className='tableCell' >{row.firstName}</TableCell>
              <TableCell className='tableCell' >{row.lastName}</TableCell>
              <TableCell className='tableCell' >{row.email}</TableCell>
              <TableCell className='tableCell' >{row.userType}</TableCell>
              <TableCell className='tableCell' >{row.dateOfBirth}</TableCell>
              <TableCell className='tableCell' >{row.contact}</TableCell>
              <TableCell className='tableCell' >{row.location}</TableCell>
              <TableCell className='tableCell' >{row.nicNumber}</TableCell>
      
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
   </div>
  )
}

export default Admintable