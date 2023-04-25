import React, { useEffect, useState } from 'react'
import"./Widget.css"
import GroupIcon from '@mui/icons-material/Group';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EmailIcon from '@mui/icons-material/Email';
import { db } from '../Server/firebase';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';

function Widgets({type}) {
  
  const[count,setCount]=useState('');
  
  useEffect(() => {
    // Retrieve the count of users with usertype equal to "Donor" from Firebase database
    const unsubscribe = getDocs(query
      (collection(db,'users')
      ,where('usertype', '==', 'Donor')))
      .onSnapshot((snapshot) => {
        setCount(snapshot.docs.length);
      });
    return () => {
      // Unsubscribe from Firebase snapshot when component unmounts
      unsubscribe();
    };
  }, []);
  
let data;


  switch(type){
    case"Donor":
      data = {
        title:"Donors",
        count:count,
        icon:(
          <GroupIcon className='Icon'/>
        )
      };
      break;
      case "Admins":
      data={
        title:"Admins",
        count:"10",
        icon:(
          <AdminPanelSettingsIcon className='Icon'/>
        )
      };
      break;
      case "Messages":
      data={
        title:"Messages",
        count:"10",
        icon:(
          <EmailIcon className='Icon'/>
        )
      };
      break;
      default:
        data = {
          title: '',
          count: '',
          icon: null,
        };
        break;
  }


  return (
  <div className='widgets'>
    <div className='left'>
      <span className='title'>{data.title}</span>
      <span className='count'>{data.count}</span>
    </div>
    <div className='right'>
   {data.icon}
    </div>
  </div>
  )
}

export default Widgets