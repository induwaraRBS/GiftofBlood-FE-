import React, { useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

function Secondstep({ values, handleChange }) {
  console.log(values, handleChange);
  return (
    <div>
      <form>
        <h5>Health Information</h5>
        <FormGroup>
          <Label for="weight">Weight</Label>
          <Input
            type="number"
            name="weight"
            id="weight"
            defaultValue={values.weight}
            onChange={handleChange("weight")}
            placeholder="Enter your weight in kilograms"
          />
        </FormGroup>
        <FormGroup>
          <Label for="">Height</Label>
          <Input
            type="number"
            name="height"
            id="height"
            defaultValue={values.height}
            onChange={handleChange("height")}
            placeholder="Enter your height in Centemeters"
          />
        </FormGroup>
        <FormGroup>
          <Label for="bloodGroup">Blood Group</Label>
          <Input
            type="select"
            name="bloodGroup"
            id="bloodGroup"
            defaultValue={values.bloodGroup}
            onChange={handleChange("bloodGroup")}
          >
            <option value=""> Select your blood group </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="updates">Health Updates</Label>
          <Input
            type="text"
            name="updates"
            id="updates"
            defaultValue={values.healthupdates}
            onChange={handleChange("healthupdates")}
            placeholder="Enter your Health Updates"
          />
        </FormGroup>
      </form>
    </div>
  );
}

export default Secondstep;
