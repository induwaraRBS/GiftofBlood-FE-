import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signup.css";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { auth,db } from '../../Server/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import validator from 'validator';


function RegisterPage  ()  {

  const navigate = useNavigate();  

  const[data,setData] = useState({ 
  firstName: '',
  lastName: '',
  bloodGroup: '',
  contact: '',
  nicNumber: '',
  dateOfBirth: '',
  email:'',
  password:'',
  location:'',
});

    
  // const [firstName, setFname] = useState('')
  // const [lastName, setLname] = useState('') 
  // const [bloodGroup, setBloodgroup] = useState('') 
  // const [contact, setContact] = useState('')  
  // const [nicNumber, setnicNumber] = useState('') 
  // const [dateOfBirth, setDateofBirth] = useState('') 
  // const [email, setEmail] = useState('') 
  // const [password, setPassword] = useState('') 
  // const [location,setLocation] = useState('') 
  const [error,setError] =useState('')


  const handleInput = (e) =>{
    const id = e.target.id;
    const value = e.target.value;

    setData(prevData => ({...prevData,[id]:value}));
  }

  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
       
      const res =await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      console.log("done")
      console.log(res.user);

     await setDoc(doc(db, "users",res.user.uid), {
       ...data, 
        timeStamp:serverTimestamp() 
      });
    }catch(error){

      console.log(error);
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
              value={data.firstName}
              onChange={handleInput}
              placeholder="Enter your first name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              value={data.lastName}
              onChange={handleInput}
              placeholder="Enter Your Last Name"
            />
          </FormGroup>

          <FormGroup>
            <Label for="contact">Contact</Label>
            <Input
              type="tel"
              name="contact"
              id="contact"
              value={data.contact}
              onChange={handleInput}  
             placeholder="Enter your contact number"
            />
          </FormGroup>
          <FormGroup>
            <Label for="dateOfBirth">Date of Birth</Label>
            <Input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={data.dateOfBirth}
              onChange={handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="location">City</Label>
            <Input 
            type='text'
            name='locatedcity'
            id='city'
            value={data.location}
            onChange={handleInput}
            placeholder="Enter the living city"/>
          </FormGroup>


          <h5>Blood Information</h5>

          <FormGroup>
            <Label for="bloodGroup">Blood Group</Label>
            <Input
              type="select"
              name="bloodGroup"
              id="bloodGroup"
              value={data.bloodGroup}
              onChange={handleInput}
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

          <h5>Account Verifications</h5>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input 
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
              value={data.email}
              onChange={handleInput}          />
          </FormGroup>
          
          <FormGroup>
            <Label for="nicNumber">NIC Number</Label>
            <Input
              type="text"
              name="nicNumber"
              id="nicNumber"
              value={data.nicNumber}
              onChange={handleInput}
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
            value={data.password}
            onChange={handleInput}
            />
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