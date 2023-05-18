import React,{useContext, useEffect, useState} from 'react'
import "./Login.css";
import LoginIcon from '@mui/icons-material/Login';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {useNavigate} from 'react-router-dom';
import { auth, db } from '../../Server/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import GoogleButton from 'react-google-button';
import { UserAuth } from '../../Server/context/Authcontext';
import { motion } from 'framer-motion';
import redwhiteImage from '../../Assets/redwhite.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login ()  {

  const{googleSignIn} = UserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState(false);

  //********************************************** */
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{

      const userCredential=await signInWithEmailAndPassword(auth,email, password);
      const userId = userCredential.user.uid;

      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        const userType = userDoc.data().usertype;

        if (userType === "Admin") {
          console.log("admin");
          toast.success("Successfully Login",);
          navigate("/admin");
        } else if (userType === "Donor") {
          console.log("donor");
          toast.success("Successfully Login");
          navigate(`/profile/${userId}`);
        } else {
          toast.error("Error")
          alert("User not found 404");
        }
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
    
  };

  const handleGoogleSignIn = async( ) =>{
    try{
      await googleSignIn();
    }catch(err){
      console.log(err);
    }
  }


const register = () => {
    navigate("/signup")
};
 
       return (
         <motion.div className="login-page"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 1 }}>
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
               <GoogleButton className='googlebutton' onClick={handleGoogleSignIn}/>
             </div>
           </motion.div>
  );
       };

export default Login;       
     
     
