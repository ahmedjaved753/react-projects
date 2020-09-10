import React, { useState, useContext } from 'react';
import { GrudgeContext } from './GrudgeContext';


const NewGrudge = React.memo(() => {
  console.log('Rendering new grudge');
  const [person, setPerson] = useState('');
  const [reason, setReason] = useState('');
  const { addGrudge } = useContext(GrudgeContext);

  const handleChange = event => {
    event.preventDefault();
    addGrudge({ person, reason });
    setPerson("");
    setReason("");
  };

  return (
    <form className="NewGrudge" onSubmit={handleChange}>
      <input
        className="NewGrudge-input"
        placeholder="Person"
        type="text"
        value={person}
        onChange={event => setPerson(event.target.value)}
      />
      <input
        className="NewGrudge-input"
        placeholder="Reason"
        type="text"
        value={reason}
        onChange={event => setReason(event.target.value)}
      />
      <input className="NewGrudge-submit button" type="submit" />
    </form>
  );
});

export default NewGrudge;
