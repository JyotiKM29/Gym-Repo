import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [joinDate, setJoinDate] = useState('');
  const [slot, setSlot] = useState('');
  const [plan, setPlan] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // submit the form data (name, branch, age, weight, joinDate, slot, plan, email, phone) to the server
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Branch:
        <input type="text" value={branch} onChange={event => setBranch(event.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={event => setAge(event.target.value)} />
      </label>
      <br />
      <label>
        Weight:
        <input type="number" value={weight} onChange={event => setWeight(event.target.value)} />
      </label>
      <br />
      <label>
        Join Date:
        <input type="date" value={joinDate} onChange={event => setJoinDate(event.target.value)} />
      </label>
      <br />
      <label>
        Slot:
        <input type="text" value={slot} onChange={event => setSlot(event.target.value)} />
      </label>
      <br />
      <label>
        Plan:
        <input type="text" value={plan} onChange={event => setPlan(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" value={phone} onChange={event => setPhone(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
