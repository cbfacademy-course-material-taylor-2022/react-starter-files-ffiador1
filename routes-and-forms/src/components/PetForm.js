import React, { useState } from 'react';

const PetForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [colours, setColours] = useState('');
  const [submitted,setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <h2>Register Your Pet</h2>
      <h3>Please fill in your pet's details below</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Pet's Name:<input type="text" value={name} onChange={(e) => { setName(e.target.value); setSubmitted(false) }} /></label>
          <label>Age: <input type="number" value={age} onChange={(e) => { setAge(e.target.value); setSubmitted(false) }} /></label>
          <label >Colours: <input type="text" value={colours} onChange={(e) => { setColours(e.target.value); setSubmitted(false) }} /></label>
        </div>
        <input type="submit" value="Submit" id="submit-button"/>
      </form>
      <div id="results">
        <h3>Results </h3>
            Name: {name}<br />
            Age: {age}<br />
            Colours: {colours}<br />
            {(submitted===true) &&<label>Thank you for submitting</label> }
      </div>
    </>
  );
}

export default PetForm;