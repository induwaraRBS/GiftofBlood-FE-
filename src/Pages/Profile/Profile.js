import React, { useEffect, useId, useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../Server/firebase';
import Donormenu from '../../Components/Donormenu';
import'./Profile.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import EmailIcon from '@mui/icons-material/Email';
function Profile() {
  const { userId } = useParams();
  const [donorDetails, setDonorDetails] = useState(null);
  useEffect(() => {
    const fetchDonorDetails = async () => {
      try {
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists()) {
          setDonorDetails(userDoc.data());
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDonorDetails();
  }, [userId]);
  console.log(donorDetails);
  
  

  return (
    <div className='profile_page'>
      <Donormenu />
      <div className='profile'>
      {donorDetails ? (
        <ListGroup>
          <hr/>
          <h3>Profile Informations</h3>
          <hr/>
          <ListGroupItem>First Name: {donorDetails.firstName}</ListGroupItem>
          <ListGroupItem>Last Name: {donorDetails.lastName}</ListGroupItem>
          <ListGroupItem>NIC Number: {donorDetails.nicNumber}</ListGroupItem>
          <ListGroupItem>Date Of Birth: {donorDetails.dateOfBirth}</ListGroupItem>
          <ListGroupItem>Locatoion: {donorDetails.location}</ListGroupItem>
          
          <hr/>
          <h3>Health Informations</h3>
          <hr/>
          <ListGroupItem>Blood Group: {donorDetails.bloodGroup}</ListGroupItem>
          <ListGroupItem>Weight: {donorDetails.weight}</ListGroupItem>
          <ListGroupItem>Height: {donorDetails.height}</ListGroupItem>
          <ListGroupItem>Health updates: {donorDetails.healthupdates}</ListGroupItem>
          
          <hr/>
          <h3>Account Verifications</h3>
          <hr/>
          <ListGroupItem>Email: {donorDetails.email}</ListGroupItem>
          <ListGroupItem>Password: {donorDetails.password}</ListGroupItem>
          <ListGroupItem>Contact: {donorDetails.contact}</ListGroupItem>

        </ListGroup>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
  );
}

export default Profile;