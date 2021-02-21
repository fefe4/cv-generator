import React from 'react';

const PersonalData = (props) => {
  const { name, lastName, email, adress, telephone } = props;
  return (
    <ul>
      <li>{name} {lastName}</li>
      <li>{email}</li>
      <li>{adress}</li>
      <li>{telephone}</li>
    
    </ul>
    
  );
};

export default PersonalData;
