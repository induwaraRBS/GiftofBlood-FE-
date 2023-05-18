import React, { useState } from 'react';
import { auth, db } from '../../Server/firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Col, Container, Form, FormGroup, Input, Label, Row, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

  const navigate=useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    nic: '',
    contact: '',
    usertype: '',
  });

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, 'users', res.user.uid), {
        firstName: data.firstName,
        lastName: data.lastName,
        nic: data.nic,
        contact: data.contact,
        usertype: data.usertype,
        timeStamp: serverTimestamp(),
      });
      console.log('admin registered');
      toast.success("Successfully Registered");
      navigate("/admin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Admin Register</h1>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="firstName">First Name:</Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  defaultValue={data.firstName}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Last Name:</Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  defaultValue={data.lastName}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={data.email}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password:</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  defaultValue={data.password}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="contact">Contact:</Label>
                <Input
                  type="text"
                  id="contact"
                  name="contact"
                  defaultValue={data.contact}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="nic">NIC:</Label>
                <Input
                  type="text"
                  id="nic"
                  name="nic"
                  defaultValue={data.nic}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="usertype">User Type:</Label>
                <Input
                  type="select"
                  name="usertype"
                  id="usertype"
                  defaultValue={data.usertype}
                  onChange={handleChange}
                >
                  <option value=""> Select your User type </option>
                  <option value="Admin">Admin</option>
                  <option value="Donor">Donor</option>
                </Input>
              </FormGroup>
              <Button type="submit" color="danger">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
 
export default RegisterPage;
