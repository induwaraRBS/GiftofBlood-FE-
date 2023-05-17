import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import SideMenu from '../SideMenu';
import'./Donortable.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { collection, getDocs, where,query, deleteDoc, doc } from "firebase/firestore";
import {db} from '../../Server/firebase'; 
import { toast } from 'react-toastify';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 120 },
  { field: 'lastName', headerName: 'Last name', width: 120 },
  { field: 'location', headerName: 'Location', width: 110 },
  { field: 'bloodGroup', headerName: 'Blood-Group', width: 95 },
  {
    field: 'height',
    headerName: 'Height',
    width: 90,
   
  },
  { field: 'weight', headerName: 'Weight', width: 90 },
  { field: 'contact', headerName: 'Contact', width: 120 },
  { field: 'nicNumber', headerName: 'NIC', width: 120 },
  { field: 'dateOfBirth', headerName: 'DOB', width: 100 },
  { field: 'Action', headerName: 'Action', width: 170,
  renderCell: (params) => {
    const handleDelete = async (rows, setRows) => {
      try {
        await deleteDoc(doc(db, "users", params.id));
        const updatedRows = rows.filter((row) => row.id !== params.id);
        setRows(updatedRows);
        toast.success("Contact Deleted Successfully");
      } catch (err) {
        console.log(err);
      }
    };


          return (
      
            <button className='deleteButton' onClick={() => handleDelete(params.rows, params.api.setRows)}>Delete<DeleteIcon className='icons'/></button>

          )
        }
      },
];


function Donortable() {

  const[rows,setRows]=useState([]);

  

  useEffect(() => {
    const fetchData = async () => {
      
      try{
        const querySnapshot = await getDocs(query(collection(db, "users"), where("usertype", "==", "Donor")));
        setRows(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
 
  }catch(err){
        console.log(err)
  }

    };
    fetchData()
  },[]);

  console.log(rows);



  return (
    <div  className='Page'>
      <SideMenu/>
      <div className='table'>
        <div className='Filter'>
          <h3>Donor Table</h3>
          <hr></hr>
        </div>
        <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
      </div>
    </div>
  )
}

export default Donortable