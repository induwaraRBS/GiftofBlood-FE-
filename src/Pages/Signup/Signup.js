import React from 'react';
import "./Signup.css";

function Signup() {

  const login = () => {};

  return (
    <div className='signup'>
      <img classname= "image1" src='https://previews.123rf.com/images/yupiramos/yupiramos1607/yupiramos160701221/59263338-blood-drop-icon-blood-donation-and-transfusion-theme-design-vector-illustration-.jpg' alt='Logo'/>
      <div className='Signup_logo'>
      <h1>GIFT OF BLOOD</h1>
      </div>
         <img src='https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png' alt='Avatar'/>

          <form>
            <div className='profile'>
             
            <h3>Profile Information</h3>
            <input placeholder='First name' type="text"/>

            <input placeholder='Last name' type="text"/>

            <input placeholder='Contact Number' type="text"/>

            <input placeholder='Email' type="email"/>

            <input placeholder='Password' type="Password"/>

            <input placeholder='Re-Enter Password' type="password"/>
          
            </div>

            <div className='blood'>
            <h3>Blood Informations</h3>
            
            <input placeholder='Town' type="text"/>

            <input placeholder='Date Of Birth' type="Date"/>

            <select placeholder='Blood Type'  name="select" type="select" >
                                          <option selected>
                                                Blood Type
                                            </option>
                                          <option>
                                                 A+
                                            </option>
                                          <option>
                                                A-
                                            </option>
                                          <option>
                                                B+
                                            </option>
                                          <option>
                                                B-
                                            </option>
                                            <option>
                                                 O+
                                            </option>
                                            <option>
                                                 O-
                                            </option>
                                            <option>
                                                 AB+
                                            </option>
                                            <option>
                                                 AB-
                                            </option>
            </select>  
            </div>

            <div className='account'>

              <h3>Account Verification</h3>
              
              <input placeholder='NIC Card Number' type="text"/>

              <input placeholder=""></input>
            </div>

            <button type='submit' onClick={login}>Signup</button>
          </form>

          
        

      
    </div>
  )
}

export default Signup
