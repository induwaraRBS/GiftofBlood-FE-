import React, { useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { auth, db } from "../Server/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Fourthstep({ values, handleChange }) {
  const {
    firstName,
    lastName,
    contact,
    nicNumber,
    dateOfBirth,
    location,
    weight,
    height,
    bloodGroup,
    healthupdates,
    email,
    password,
    usertype,
  } = values;

  useEffect(() => {
    const createUser = async () => {
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        await setDoc(doc(db, "users", res.user.uid), {
          firstName,
          lastName,
          contact,
          nicNumber,
          dateOfBirth,
          location,
          weight,
          height,
          bloodGroup,
          healthupdates,
          email,
          password,
          usertype,
          timeStamp: serverTimestamp(),
        });
        console.log("done");
      } catch (error) {
        console.log(error);
      }
    };
    createUser();
  }, [values]);
  console.log(values);

  return (
    <div>
      <h2>check your details</h2>
      <ListGroup style={{ maxWidth: "600px", margin: "auto" }}>
        <ListGroupItem variant="secondary">
          First Name:{firstName}
        </ListGroupItem>
        <ListGroupItem variant="secondary">Last Name:{lastName}</ListGroupItem>
        <ListGroupItem variant="secondary">Contact:{contact}</ListGroupItem>
        <ListGroupItem variant="secondary">
          NIC Number:{nicNumber}
        </ListGroupItem>
        <ListGroupItem variant="secondary">
          Date Of Birth:{dateOfBirth}
        </ListGroupItem>
        <ListGroupItem variant="secondary">Location:{location}</ListGroupItem>
        <ListGroupItem variant="secondary">Weight:{weight}</ListGroupItem>
        <ListGroupItem variant="secondary">Height:{height}</ListGroupItem>
        <ListGroupItem variant="secondary">
          BloodGroup:{bloodGroup}
        </ListGroupItem>
        <ListGroupItem variant="secondary">
          HealthUpdates:{healthupdates}
        </ListGroupItem>
        <ListGroupItem variant="secondary">Email:{email}</ListGroupItem>
        <ListGroupItem variant="secondary">Password:{password}</ListGroupItem>
        <ListGroupItem variant="secondary">UserType:{usertype}</ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default Fourthstep;
