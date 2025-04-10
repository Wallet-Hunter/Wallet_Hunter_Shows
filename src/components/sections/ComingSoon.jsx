import React, { useEffect, useState } from 'react';
import ComingSoonImage from "../../assets/images/ComingSoon.jpeg"

const ComingSoon = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(matchMedia.matches ? 'dark' : 'light');

    const handleThemeChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    matchMedia.addEventListener('change', handleThemeChange);
    return () => matchMedia.removeEventListener('change', handleThemeChange);
  }, []);

  const backgroundColor = theme === 'dark' ? '#0d0d0d' : '#f8f8f8';

  return (
    <div
      style={{
        backgroundColor: "black",
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //transition: 'background-color 0.3s ease-in-out',
        overflow: 'hidden',
        padding: '0 1rem',
      }}
    >
      <img
        src={ComingSoonImage}// Replace with your actual image path
        alt="Coming Soon"
        style={{
Width: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};

export default ComingSoon;
