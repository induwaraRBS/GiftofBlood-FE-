import React from 'react';
import moment from 'moment';

function ProfileItems(props) {
  return (
    <li>
        <p><strong>Name:</strong>{props.name}</p>
        <p><strong>City:</strong>{props.city}</p>
        <p><strong>Email:</strong>{props.email}</p>
        <p><strong>Blood:</strong>{props.blood}</p>
        <p><strong>Birthday:</strong>{moment (props.dob).format('DD-MM-YYYY')}</p>
    </li>
  )
}

export default ProfileItems