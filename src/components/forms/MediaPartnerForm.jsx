import React, { useState, useEffect } from 'react';

const MediaPartnerForm = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(match.matches ? 'dark' : 'light');
    match.addEventListener('change', e => setTheme(e.matches ? 'dark' : 'light'));
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    salutation: '',
    email: '',
    mobile: '',
    title: '',
    organization: '',
    website: '',
    linkedin: '',
    twitter: '',
    telegram: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzMQ4SLKoCXT3JCJjrqKMJx0g_cjLEBbiIvx7szmsdPtPDCnMaxEntkSAqzR5mTkXZZ/exec';
  
    // Convert formData object into URL-encoded format
    const formBody = new URLSearchParams(formData).toString();
  
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      });
  
      const result = await response.json();
      console.log('Response from Google Script:', result);
  
      if (result.status && result.status.toLowerCase() === 'success') {
        alert('Form submitted successfully!');
        setFormData({
          fullName: '',
          salutation: '',
          email: '',
          mobile: '',
          title: '',
          organization: '',
          website: '',
          linkedin: '',
          twitter: '',
          telegram: ''
        });
      } else {
        alert('Submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Submission error.');
    }
  };
  
  
  

  return (
    <div style={styles.container(theme)}>
      <form style={styles.form(theme)} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Media Partner Form</h2>

        {renderInput('Full Name*', 'fullName', 'text')}
        {renderSelect('Salutation*', 'salutation', ['Ms', 'Mr', 'Mrs', 'Prefer not to say'])}
        {renderInput('Company Email Address*', 'email', 'email')}
        {renderInput('Mobile Number (+Country Code)*', 'mobile', 'tel')}
        {renderInput('Designation/Job Title*', 'title', 'text')}
        {renderInput('Media Publication / Organization*', 'organization', 'text')}
        {renderInput('Website Link*', 'website', 'url')}

        <h4 style={styles.socialLabel}>Social Media Links</h4>
        {renderInput('LinkedIn Profile Link', 'linkedin', 'url')}
        {renderInput('Twitter/X Profile Link', 'twitter', 'url')}
        {renderInput('Telegram Profile Link', 'telegram', 'url')}

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );

  function renderInput(label, name, type) {
    return (
      <div style={styles.group}>
        <label style={styles.label}>{label}</label>
        <input
          type={type}
          name={name}
          required={label.includes('*')}
          style={styles.input(theme)}
          value={formData[name]}
          onChange={handleChange}
        />
      </div>
    );
  }

  function renderSelect(label, name, options) {
    return (
      <div style={styles.group}>
        <label style={styles.label}>{label}</label>
        <select
          name={name}
          required
          style={styles.input(theme)}
          value={formData[name]}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
    );
  }
};

const styles = {
  container: theme => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    minHeight: '100vh',
    background: theme === 'dark'
      ? 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)'
      : 'linear-gradient(to bottom, #e0f7fa, #ffffff)',
    color: theme === 'dark' ? '#f0f0f0' : '#222',
    transition: 'all 0.4s ease-in-out',
  }),
  form: theme => ({
    background: theme === 'dark' ? 'rgba(20, 20, 20, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    borderRadius: '1rem',
    padding: '2rem',
    width: '100%',
    maxWidth: '600px',
    boxShadow: theme === 'dark'
      ? '0 0 30px rgba(0, 255, 255, 0.2)'
      : '0 0 30px rgba(0, 123, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(0,0,0,0.1)'
  }),
  heading: {
    marginBottom: '1.5rem',
    color: '#00ffff',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: '1.8rem',
    letterSpacing: '1px'
  },
  group: {
    marginBottom: '1.4rem',
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    fontWeight: 600,
    color: '#00bcd4'
  },
  input: theme => ({
    padding: '0.8rem 1rem',
    border: 'none',
    borderRadius: '0.5rem',
    backgroundColor: theme === 'dark' ? '#1c1c1c' : '#f5f5f5',
    color: theme === 'dark' ? '#ffffff' : '#000000',
    fontSize: '1rem',
    boxShadow: theme === 'dark'
      ? 'inset 0 0 6px rgba(0, 255, 255, 0.3)'
      : 'inset 0 0 6px rgba(0, 123, 255, 0.15)',
    transition: 'all 0.3s ease',
    outline: 'none'
  }),
  socialLabel: {
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
    fontWeight: 700,
    fontSize: '1.1rem',
    color: '#00e5ff'
  },
  button: {
    width: '100%',
    padding: '1rem',
    border: 'none',
    borderRadius: '0.6rem',
    background: 'linear-gradient(to right, #00ffff, #00bcd4)',
    color: '#000',
    fontSize: '1.2rem',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 255, 255, 0.4)',
    textTransform: 'uppercase'
  }
};

export default MediaPartnerForm;
