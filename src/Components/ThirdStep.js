import React, { useEffect, useState } from 'react'
import { FormGroup, Label, Input} from 'reactstrap';


function ThirdStep({values,handleChange}) {

  console.log(values);
   
  return (
    <div>
         <form >
          <h5>Account verfication</h5>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              defaultValue={values.email}
              onChange={handleChange('email')}
              placeholder="Enter your first name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
            type='password'
            name='password'
            id="password"
            placeholder='Enter a password'
            defaultValue={values.password}
            onChange={handleChange('password')}
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">User Type</Label>
            <Input
              type="select"
              name="usertype"
              id="usertype"
              defaultValue={values.usertype}
              onChange={handleChange('usertype')}
            >
              <option value=""> Select your User type </option>
              <option value="Admin">Admin</option>
              <option value="Donor">Donor</option>
            </Input>
          </FormGroup>

          </form>
    </div>
  )
}

export default ThirdStep