import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import "./Banner.css";
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import videobg from '../Assets/videobg.mp4';

function Banner() {
  const navigate = useNavigate();

  const bsignup = () =>{
    navigate('/signup');
    console.log("button1");
  }

  const blogin = () => {
    navigate('/login');
    console.log("button2");
  }
  return (
    <><div className='banner'>
      <video src={videobg} autoPlay loop muted/>
    </div>
      <div className='banner_text'>
        <h1> Donate Blood And Save a Life!</h1>
        <p>lorem abdjanw ajnwdjnawdm ajunwdnaiwdanwdjnanadwlnadiald <br />
          ajnwdnalwdnlaidwl djnwawlndilanwdila ajnwldnalwndilawndli</p>

          <Button onClick ={bsignup} className='banner_button1' color="danger"  size="lg">
              Register
              </Button>

           <Button onClick={blogin} className='banner_button2' color="danger"   size="lg">
              Login
              </Button>    

      </div></>
     
  
  );
}

export default Banner




