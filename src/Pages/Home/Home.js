import React from 'react';
import './Home.css';
import Header from '../../Components/Header';
import Banner from '../../Components/Banner';
import Body from '../../Components/Body';
import Callnow from '../../Components/Callnow';
import ClientSay from '../../Components/ClientSay';





function Home() {
  return (
    
    <div className="Home">
   

    {/* AppBody */}
    <div className='Banner'>
        <Banner/>    
    </div>
    {/* Readmore */}
    <div className='Body'>
        <Body/>
    </div>
    {/* Callnow */}
    <div className='Callnow'>
      <Callnow/>
    </div>
    {/* ClientSay */}
    <div  className='ClientSay'>
      <ClientSay/>
    </div>
     {/* Footer  */}

    
  </div>  
    
  )
}

export default Home
