// src/components/JobApplicationForm.jsx
import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted for ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobApplicationForm;

 <div className="apply-page">
      <h2>Apply for {job.title}</h2>
      <p><strong>Skills Required:</strong> {job.skills.join(", ")}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>
      
      {/* Application form or button */}
      <button>Submit Application</button>
    </div>
