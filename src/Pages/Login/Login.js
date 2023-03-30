import React,{useContext, useState} from 'react'
import "./Login.css";
import LoginIcon from '@mui/icons-material/Login';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../Server/firebase';
import { Authcontext } from '../../Server/context/Authcontext';


function Login ()  {

  
  const navigate = useNavigate();
  
  const {dispatch} = useContext(Authcontext)



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth,email,password)
    .then ((userCredential) => {

      const user = userCredential.user;
      dispatch({type:"LOGIN",payload:user})
      console.log(user)
      navigate('/profile');
      alert("Login")
    })
    .catch((error) => {
     setError(true);
    })
  };

const register = () => {
    navigate("/signup")
};
       
       return (
       
       

         <div className="login-page">
             <div className="login-box">
               <h2>Sign in </h2><LoginIcon></LoginIcon>
               <Form onSubmit={handleSubmit}>
                 <FormGroup>
                   <Label for="email">Email</Label>
                   <Input
                     type="email"
                     name="email"
                     id="email"
                     placeholder="Enter your email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)} />
                 </FormGroup>
                 <FormGroup>
                   <Label for="password">Password</Label>
                   <Input
                     type="password"
                     name="password"
                     id="password"
                     placeholder="Enter your password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)} />
                 </FormGroup>
                 <Button color="danger">Login</Button>
                 {error && <span>Wrong Email or Password!</span>}
                  <div className='Account'>
                 <Label className='label1'>Don't have an </Label>
               <Label className='signup' onClick={register}> Account?</Label>
                 </div>
               </Form>
             </div>
           </div>
  );
};

export default Login;       
     
     
