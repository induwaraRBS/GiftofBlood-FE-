import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">GIFT OF BLOOD</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/profile">Profile</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Container className="mt-4">
        <h1>Profile Page</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for="bloodGroup">Blood Group</Label>
            <Input type="select" name="bloodGroup" id="bloodGroup" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
              <option value="">Select a blood group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="phoneNumber">Phone Number</Label>
            <Input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </FormGroup>
          <Button color="primary">Save</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Profile;