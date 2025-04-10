import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const mediaPartners = [];

const styles = {
  section: {
    paddingTop: "2rem",
    paddingBottom: "4rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    background: `
      radial-gradient(circle at top left, #54d5d9, #1b7f82 70%, #0a2e2f 100%),
      url('https://www.transparenttextures.com/patterns/stardust.png')
    `,
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    color: "#fff",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  
  

  title: {
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
    color: "#00ffff",
    fontWeight: "700",
    letterSpacing: "1px",
  },

  description: {
    fontSize: "1.1rem",
    color: "#fff",
    //marginBottom: "1rem",
    maxWidth: "600px",
    margin: "0 auto 2rem auto",
    lineHeight: "1.6",
  },

  logosWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "2.5rem",
    alignItems: "center",
    justifyItems: "center",
    padding: "0 1rem",
  },

  logoContainer: {
    backgroundColor: "#141414",
    padding: "1.5rem",
    borderRadius: "12px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    boxShadow: "0 0 10px rgba(0, 255, 225, 0.1)",
  },

  logo: {
    maxWidth: "100px",
    filter: "grayscale(100%) brightness(1.2)",
    opacity: 0.85,
    transition: "all 0.4s ease",
  },

  logoHover: {
    filter: "grayscale(0%) drop-shadow(0 0 10px #00ffff)",
    opacity: 1,
    transform: "scale(1.1)",
  },

  button: {
    marginTop: "-0.5rem",
    backgroundColor: "#00ffff",
    color: "#000",
    padding: "0.75rem 2rem",
    borderRadius: "30px",
    fontWeight: "bold",
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  responsive: `
    @media (max-width: 600px) {
      .logosWrapper {
        display: flex !important;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        gap: 1rem;
        padding-bottom: 1rem;
      }
      .logoItem {
        flex: 0 0 auto;
        scroll-snap-align: center;
      }
    }
  `,
};

const MediaPartners = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = styles.responsive;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  
  const navigate = useNavigate();

  return (
    <section id="media" style={styles.section}>
      <h2 style={styles.title}>BECOME AN MEDIA PARTNER</h2>
      <p style={styles.description}>
        We are honored to be recognized by renowned media platforms who share
        our mission and vision.
      </p>

      <div className="logosWrapper" style={styles.logosWrapper}>
        {mediaPartners.map((partner, index) => (
          <div
            className="logoItem"
            key={index}
            style={styles.logoContainer}
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector("img");
              Object.assign(img.style, styles.logoHover);
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img");
              Object.assign(img.style, styles.logo);
            }}
          >
            <img src={partner.logo} alt={partner.name} style={styles.logo} />
          </div>
        ))}
      </div>

      <button
        style={styles.button}
        onClick={() => navigate("/mediapartnerform")}
      >
        BECOME PARTNER
      </button>
    </section>
  );
};

export default MediaPartners;
