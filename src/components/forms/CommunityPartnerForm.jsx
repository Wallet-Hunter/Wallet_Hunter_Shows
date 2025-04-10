import React, { useState, useEffect } from 'react';

const AffiliatePartnerForm = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = e => setTheme(e.matches ? 'dark' : 'light');
    setTheme(match.matches ? 'dark' : 'light');
    match.addEventListener('change', updateTheme);
    return () => match.removeEventListener('change', updateTheme);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    website: '',
    channels: [],
    audienceDescription: '',
    whyAffiliate: '',
  });

  const communicationOptions = [
    'Emails/Newsletters/Blog',
    'Telegram Channel/Group',
    'WhatsApp Group',
    'X (Twitter)',
    'Reddit',
    'Facebook',
    'LinkedIn',
    'Instagram'
  ];

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = option => {
    setFormData(prev => ({
      ...prev,
      channels: prev.channels.includes(option)
        ? prev.channels.filter(item => item !== option)
        : [...prev.channels, option]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyXwTC-AKCi92qladWU-iRadJz7No7lW2s2bxw4cVFTUMoLri9L1_7FDjvc500aSoxy/exec';
    const dataToSend = {
      ...formData,
      channels: formData.channels.join(', '),
    };

    const formBody = new URLSearchParams(dataToSend).toString();

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody,
      });

      const result = await response.json();
      console.log('Response:', result);

      if (result.status?.toLowerCase() === 'success') {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          telegram: '',
          website: '',
          channels: [],
          audienceDescription: '',
          whyAffiliate: '',
        });
      } else {
        alert('Submission failed.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting form.');
    }
  };

  const renderInput = (label, name, type) => (
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

  const renderTextarea = (label, name) => (
    <div style={styles.group}>
      <label style={styles.label}>{label}</label>
      <textarea
        name={name}
        required
        style={{ ...styles.input(theme), minHeight: '100px', resize: 'vertical' }}
        value={formData[name]}
        onChange={handleChange}
      />
    </div>
  );

  return (
    <div style={styles.container(theme)}>
      <form style={styles.form(theme)} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Affiliate Partner Form</h2>

        {renderInput('Contact Person Name*', 'name', 'text')}
        {renderInput('Contact Person Email Address*', 'email', 'email')}
        {renderInput('Contact Person Telegram Username*', 'telegram', 'text')}
        {renderInput('Website (if applicable)', 'website', 'url')}

        <div style={styles.group}>
          <label style={styles.label}>
            Which communication channels do you use for engaging with your audience?*
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {communicationOptions.map(option => (
              <label key={option} style={{ color: theme === 'dark' ? '#ddd' : '#333' }}>
                <input
                  type="checkbox"
                  checked={formData.channels.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  style={{ marginRight: '0.4rem' }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {renderTextarea('Describe Your Audience:*', 'audienceDescription')}
        {renderTextarea('Why do you want to be an affiliate partner with Wallet Hunter Shows | Forbes Edition?*', 'whyAffiliate')}

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
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
    maxWidth: '700px',
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

export default AffiliatePartnerForm;
