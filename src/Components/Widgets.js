import React from 'react'
import"./Widget.css"
import GroupIcon from '@mui/icons-material/Group';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EmailIcon from '@mui/icons-material/Email';

function Widgets({type}) {
  let data;

  switch(type){
    case"Donor":
      data = {
        title:"Donors",
        count:"100",
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