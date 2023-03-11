import { Icon } from '@mui/material';
import React from 'react'
import "./Login.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Login() {

  const loginToProfile = () => {
    e.preventDefault();
  };

  const register = () => {};

  return (
    <div className='login'>
    
      <img src='https://previews.123rf.com/images/yupiramos/yupiramos1607/yupiramos160701221/59263338-blood-drop-icon-blood-donation-and-transfusion-theme-design-vector-illustration-.jpg' alt='Logo'/>
      <div className='login_logo'>
      <h1>GIFT OF BLOOD</h1>
      </div>
         <img src='https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png' alt='Avatar'/>

          <form>
            <input placeholder='Full name' type="text"/>

            <input placeholder='Profile pic' type="text"/>

            <input placeholder='Password' type="password"/>

            <input placeholder='Email' type="email"/>
           
            <button type='submit' onClick={loginToProfile}>Login</button>
          </form>

          <p>
            Don't have an account?
            <span className='login_register' onClick={register}> Register Now</span>
          </p>

    </div>
  )
}

export default Login
