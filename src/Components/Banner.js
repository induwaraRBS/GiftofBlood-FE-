import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import "./Banner.css";
import { Button } from 'reactstrap';

function Banner() {
  return (
    <><div className='banner'>
      <img src='https://images.unsplash.com/photo-1615461065624-21b562ee5566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80' alt='' />

    </div>
      <div className='banner_text'>
        <h1> Donate Blood And Save a Life!</h1>
        <p>lorem abdjanw ajnwdjnawdm ajunwdnaiwdanwdjnanadwlnadiald <br />
          ajnwdnalwdnlaidwl djnwawlndilanwdila ajnwldnalwndilawndli</p>

          <Button className='banner_button1' color="danger"  size="lg">
              Register
              </Button>

           <Button className='banner_button2' color="danger"   size="lg">
              Login
              </Button>    

      </div></>
     
  
  );
}

export default Banner




