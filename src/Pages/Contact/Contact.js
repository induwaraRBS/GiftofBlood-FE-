import React ,{useEffect, useState} from 'react';
import {Container,Row,Col,Form,FormGroup,Label,Input,Button} from 'reactstrap';
import "./Contact.css"
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../Server/firebase';
import { motion } from 'framer-motion';


function Contact() {
  // const[name,setName]=useState('');
  // const[email,setEmail]=useState('');
  // const[message,setMessage]=useState('');
  // const[contact,setContact]=useState('');

  const[data,setData]=useState({
    fullname:'',
    email:'',
    contact:'',
    message:'',
  })

  const handleChange = (e) =>{
    const id = e.target.id;
    const value =e.target.value;

    setData({...data, [id]:value});
  }
    const handleSubmit = async(e) =>{
      e.preventDefault();
      try{

      await addDoc(collection(db,"Messages"),{
       ...data,
         timeStamp:serverTimestamp() 
        });
        console.log("done");
      }catch(error){
        console.log(error)
      }
    };
  

  return (
    <motion.div 
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}>
        <Container>
      <Row>
        <Col>
          <h1>Contact Us</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="fullname">Name:</Label>
              <Input type="text" id="fullname" name="fullname"  defaultvalue={data.name} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email:</Label>
              <Input type="email" id="email" name="email" defaultvalue={data.email} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="contact">Contact:</Label>
              <Input type="text" id="contact" name="contact" defaultvalue={data.contact} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message:</Label>
              <Input type="textarea" id="message" name="message" defaultvalue={data.message} onChange={handleChange} />
            </FormGroup>
            <Button type="submit" color="danger">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </motion.div>
  )
}

export default Contact