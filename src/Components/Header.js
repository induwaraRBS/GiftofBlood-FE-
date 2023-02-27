import React from 'react';
import "./Header.css";
import HeaderOption from './HeaderOption';



function Header() {
  return (
    <div className='header'>

        <div className='header__left'>
            <img src='https://previews.123rf.com/images/yupiramos/yupiramos1607/yupiramos160701221/59263338-blood-drop-icon-blood-donation-and-transfusion-theme-design-vector-illustration-.jpg'
            alt='LOGO'/>
            <div className='header__text'>
              <h4>GIFT OF BLOOD</h4>
            </div>
            
        </div>
        <div className='header__right'>
          <HeaderOption title = 'Home'/>
          <HeaderOption title = 'About us'/>
          <HeaderOption title = 'News'/>
          <HeaderOption title = 'Contact'/>
          <HeaderOption title = 'Login'/>
          <HeaderOption title = 'Register'/>
        </div>

    </div>
  )
}

export default Header
