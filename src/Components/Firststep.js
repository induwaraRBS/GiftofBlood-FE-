import React, { useState } from 'react'
import { FormGroup, Label, Input} from 'reactstrap';



function Firststep({values,handleChange}) {


console.log(values,handleChange);

  console.log("sharoiiii");
  return (
   
    <div>
         <form >
          <h5>Profile Information</h5>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              defaultValue={values.firstName}
              onChange={handleChange('firstName')}
              placeholder="Enter your first name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              defaultValue={values.lastName}
              onChange={handleChange('lastName')}
              placeholder="Enter Your Last Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="contact">Contact</Label>
            <Input
              type="tel"
              name="contact"
              id="contact"
              defaultValue={values.contact}
              onChange={handleChange('contact')}  
             placeholder="Enter your contact number"
            />
          </FormGroup>
          <FormGroup>
            <Label for="dateOfBirth">Date of Birth</Label>
            <Input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
             defaultValue={values.dateOfBirth}
              onChange={handleChange('dateOfBirth')}
            />
          </FormGroup>
          <FormGroup>
            <Label for="nicNumber">NIC Number</Label>
            <Input
              type="text"
              name="nicNumber"
              id="nicNumber"
              defaultValue={values.nicNumber}
              onChange={handleChange('nicNumber')}
              placeholder="Enter your NIC number"
            />
          </FormGroup>
          <FormGroup>
            <Label for="location">City</Label>
            <Input 
            type='text'
            name='location'
            id='location'
            defaultValue={values.location}
            onChange={handleChange('location')}
            placeholder="Enter the living city"/>
          </FormGroup>
          </form>
    </div>

    
  )
}

export default Firststep