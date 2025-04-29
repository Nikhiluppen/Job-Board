import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplyJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FullName: '',
    Email: '',
    Phone: '',
    address: '',
    dob: '',
    education: '',
    position: '',
    experience: '',
    reference: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application Submitted:', formData);
    alert('Application submitted successfully!');
  };

  return (
    <div style={styles.pageWrapper}>
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
        alt="Apply Banner"
        style={styles.headerImage}
      />

      <div style={styles.contentWrapper}>
        <div style={styles.jobInfo}>
          <h1 style={styles.jobTitle}>📝 Job Application Form</h1>
          <p style={styles.jobMeta}>Fill in all the required details carefully.</p>
          <button onClick={() => navigate('/jobs')} style={styles.backBtn}>← Back to Jobs</button>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Full Name:</label>
          <input style={styles.input} type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

          <label style={styles.label}>Email Address:</label>
          <input style={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label style={styles.label}>Phone Number:</label>
          <input style={styles.input} type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <label style={styles.label}>Address:</label>
          <input style={styles.input} type="text" name="address" value={formData.address} onChange={handleChange} required />

          <label style={styles.label}>Date of Birth:</label>
          <input style={styles.input} type="date" name="dob" value={formData.dob} onChange={handleChange} required />

          <label style={styles.label}>Education Qualification:</label>
          <input style={styles.input} type="text" name="education" value={formData.education} onChange={handleChange} required />

          <label style={styles.label}>Position Applied For:</label>
          <input style={styles.input} type="text" name="position" value={formData.position} onChange={handleChange} required />

          <label style={styles.label}>Previous Experience:</label>
          <textarea style={styles.textarea} name="experience" value={formData.experience} onChange={handleChange} rows="3" required></textarea>

          <label style={styles.label}>Reference (Name & Contact):</label>
          <textarea style={styles.textarea} name="reference" value={formData.reference} onChange={handleChange} rows="2" required></textarea>

          <label style={styles.label}>Upload Resume:</label>
          <input style={styles.input} type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />

          <button type="submit" style={styles.submitBtn}>Submit Application</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    background: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
  },
  headerImage: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    borderBottom: '6px solid #00bcd4',
  },
  contentWrapper: {
    padding: '30px 20px',
    maxWidth: '800px',
    margin: 'auto',
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
  },
  jobInfo: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  jobInfo: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  jobTitle: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '10px',
  },
  jobMeta: {
    fontSize: '16px',
    color: '#666',
  },
  backBtn: {
    background: '#00bcd4',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    color: '#fff',
    marginTop: '12px',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  label: {
    fontWeight: 'bold',
    color: '#444'
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  submitBtn: {
    background: '#007bff',
    color: 'white',
    padding: '12px',
    borderRadius: '6px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px'
  }
};

export default ApplyJob;