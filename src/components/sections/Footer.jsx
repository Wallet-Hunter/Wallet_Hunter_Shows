import React from "react";
import logo from "../../assets/images/WH_Logo_Transparent_.png"; // Wallet Hunter logo
import partnerLogo from "../../assets/images/forbesLogo.png"; // adjust path

const Footer = () => {
  const footerStyle = {
    background: "black",
    
    color: "#ccc",
    padding: "3rem 1rem",
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "clamp(0.9rem, 1vw, 1rem)",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 -5px 15px rgba(0, 255, 225, 0.05)",
    textAlign: "center",
  };

  const footerContainer = {
    maxWidth: "1300px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
  };

  const logoRow = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "0.3rem",
  };

  const logoStyle = {
    width: "80px",
    height: "60px",
    transition: "transform 0.3s ease-in-out",
  };

  const glowText = {
    color: "#fff",
    //textShadow: "0 0 6px #00ffe1, 0 0 12px #9f00ff",
    fontWeight: "bold",
    fontSize: "1rem",
    marginTop: "0.2rem",
  };

  const smallText = {
    fontSize: "0.75rem",
    opacity: 0.5,
  };

  const linkGroup = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.2rem",
  };

  const linkStyle = {
    color: "#00ffe1",
    textDecoration: "none",
    fontWeight: "500",
    transition: "text-shadow 0.3s ease, transform 0.3s ease",
  };

  const handleHover = (e) => {
    e.target.style.textShadow = "0 0 8px #00ffe1";
    e.target.style.transform = "translateY(-2px)";
  };

  const handleOut = (e) => {
    e.target.style.textShadow = "none";
    e.target.style.transform = "none";
  };

  const handleLogoHover = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleLogoOut = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContainer}>
        <div style={logoRow}>
          <img
            src={logo}
            alt="Wallet Hunter Logo"
            style={logoStyle}
            onMouseOver={handleLogoHover}
            onMouseOut={handleLogoOut}
          />
          <img
            src={partnerLogo}
            alt="Partner Logo"
            style={logoStyle}
            onMouseOver={handleLogoHover}
            onMouseOut={handleLogoOut}
          />
        </div>

        <p style={glowText}>© 2025 Wallet Hunter Shows | Forbes Web3 Edition</p>
        <p style={smallText}>Crafted with 💡 by Wallet Hunter</p>

        <div style={linkGroup}>
          {["About", "Newsletter", "Speakers", "Media Partners", "Blog"].map((label, index) => (
            <a
              key={index}
              href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
              style={linkStyle}
              onMouseOver={handleHover}
              onMouseOut={handleOut}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
