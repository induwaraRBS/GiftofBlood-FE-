import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signup.css";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import login from '../Login/Login';

function RegisterPage  ()  {

  const navigate = useNavigate();  
    
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    bloodGroup: '',
    contact: '',
    nicNumber: '',
    dateOfBirth: '',
    email:'',
    password:'',
    location:''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData); // Replace with actual submission logic
  };

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
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </FormGroup>

          <FormGroup>
            <Label for="contact">Contact</Label>
            <Input
              type="tel"
              name="contact"
              id="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your contact number"
            />
          </FormGroup>
          <FormGroup>
            <Label for="dateOfBirth">Date of Birth</Label>
            <Input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="location">City</Label>
            <Input 
            type='text'
            name='locatedcity'
            id='city'
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter the living city"/>
          </FormGroup>


          <h5>Blood Information</h5>

          <FormGroup>
            <Label for="bloodGroup">Blood Group</Label>
            <Input
              type="select"
              name="bloodGroup"
              id="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <Label for="nicNumber">NIC Number</Label>
            <Input
              type="text"
              name="nicNumber"
              id="nicNumber"
              value={formData.nicNumber}
              onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}/>
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