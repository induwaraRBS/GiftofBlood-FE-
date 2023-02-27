import React from 'react'
import './HeaderOption.css';

function HeaderOption({title}) {
  return (
    <div className='headerOption'>
        <h3 className='headerOption__title'>{title}</h3>
      
    </div>
  )
}

export default HeaderOption
