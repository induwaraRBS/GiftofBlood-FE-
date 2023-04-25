import React from 'react'
import'./Healthinfo.css'
import Donormenu from '../Donormenu'

function Healthinfo() {
  return (
    <div className='Page'>
        <Donormenu/>
       <div className='details'>
            Health updates
        </div> 
    </div>
  )
}

export default Healthinfo