import React,{useContext, useEffect, useState} from 'react'
import "./Login.css";
import LoginIcon from '@mui/icons-material/Login';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {useNavigate} from 'react-router-dom';
import app, { auth, db } from '../../Server/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, getDoc } from 'firebase/firestore';


function Login ()  {

  
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState(false);

  //********************************************** */
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{

      const userCredential=await signInWithEmailAndPassword(auth,email, password);
     
      const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
      if (userDoc.exists()) {
        const userType = userDoc.data().usertype;

        if (userType === "Admin") {
          console.log("admin");
          alert("admin done");
          navigate("/admin");
        } else if (userType === "Donor") {
          console.log("donor");
          alert("donor done");
          navigate("/profile");
        } else {
          alert("User not found 404");
        }
      }
    } catch (error) {
      setError(true);
      console.log(error);
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
     
     
