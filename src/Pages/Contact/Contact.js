import React ,{useState} from 'react';
import {Container,Row,Col,Form,FormGroup,Label,Input,Button} from 'reactstrap';
import "./Contact.css"


function Contact() {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[message,setMessage]=useState('');
  const[contact,setContact]=useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message},Contact:${contact}`);
    // Add code to send form data to server or handle form submission here
  };

  return (
    <div >
        <Container>
      <Row>
        <Col>
          <h1>Contact Us</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email:</Label>
              <Input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="contact">Contact:</Label>
              <Input type="text" id="contact" name="contact" required value={contact} onChange={(e) => setContact(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message:</Label>
              <Input type="textarea" id="message" name="message" required value={message} onChange={(e) => setMessage(e.target.value)} />
            </FormGroup>
            <Button type="submit" color="danger">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Contact