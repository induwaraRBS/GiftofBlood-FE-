import React,{useState} from 'react'
import "./Login.css";
import LoginIcon from '@mui/icons-material/Login';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {useNavigate} from 'react-router-dom'
import { UserAuth } from '../../Server/context/Authcontext';



function Login ()  {

  const {signIn} = UserAuth();

  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('')
    try{
      await signIn(email,password)
      navigate('/profile')
      alert("Successfully login");
    }catch (e){
      setError(e.message)
      console.log(e.message)
    }
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
                 <Label>Don't have an </Label>
                 <span className='signup' onClick={register}> Account?</span>
               </Form>
             </div>
           </div>
  );
};

export default Login;       
     
     
