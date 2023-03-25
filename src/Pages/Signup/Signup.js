import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signup.css";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import login from '../Login/Login';
import { UserAuth } from '../../Server/context/Authcontext';





function RegisterPage  ()  {

  const navigate = useNavigate();  

  const {createUser} = UserAuth()
    
  const [firstName, setFname] = useState('')
  const [lastName, setLname] = useState('') 
  const [bloodGroup, setBloodgroup] = useState('') 
  const [contact, setContact] = useState('')  
  const [nicNumber, setnicNumber] = useState('') 
  const [dateOfBirth, setDateofBirth] = useState('') 
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
  const [location,setLocation] = useState('') 
  const [error,setError] =useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try{
      await createUser(email,password)
      navigate('/profile')
      alert("Regoistered Successfully")
    }catch (e){
      setError(e.message)
      console.log(e.message)
    }
   }

  //navigate through the button
  const Login = () => {   
    navigate("/login")
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Create Your Account</h2>< AccountCircleSharpIcon className="my-icon" />
       
        <form onSubmit={handleSubmit}>
          <h5>Profile Information</h5>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFname(e.target.value)}
              placeholder="Enter your first name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Enter your last name"
            />
          </FormGroup>

          <FormGroup>
            <Label for="contact">Contact</Label>
            <Input
              type="tel"
              name="contact"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter your contact number"
            />
          </FormGroup>
          <FormGroup>
            <Label for="dateOfBirth">Date of Birth</Label>
            <Input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateofBirth(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="location">City</Label>
            <Input 
            type='text'
            name='locatedcity'
            id='city'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter the living city"/>
          </FormGroup>


          <h5>Blood Information</h5>

          <FormGroup>
            <Label for="bloodGroup">Blood Group</Label>
            <Input
              type="select"
              name="bloodGroup"
              id="bloodGroup"
              value={bloodGroup}
              onChange={(e) => setBloodgroup(e.target.value)}
            >
              <option value="">-- Select your blood group --</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </Input>
          </FormGroup>

          <h5>Account Verfications</h5>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input 
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          
          <FormGroup>
            <Label for="nicNumber">NIC Number</Label>
            <Input
              type="text"
              name="nicNumber"
              id="nicNumber"
              value={nicNumber}
              onChange={(e) => setnicNumber(e.target.value)}
              placeholder="Enter your NIC number"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
            type='password'
            name='password'
            id="password"
            placeholder='Enter a password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          </FormGroup>
          
         
          <Button color="danger" block>Sign Up</Button>
          <Label>Already Have an</Label>
          <span className='login_register' onClick={Login}> Account?</span>
        </form>
      </div>
    </div>
  );
};

export default (RegisterPage);