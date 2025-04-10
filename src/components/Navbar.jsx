import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./NavBar.css"
import logoImage from "../assets/images/WH_Logo_Transparent_.png"

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      if (isMobile) setMenuOpen(false);
    }
  };

  const navItemsLeft = [
    { id: "about", label: "About Us" },
    { id: "speakers", label: "Speakers" },
  ];

  const navItemsRight = [
    { id: "media", label: "Media Partners" },
    { id: "blog", label: "Blog" },
    { id: "newsletter", label: "Newsletter" },
  ];

  const HamburgerIcon = (
    <svg width="24" height="24" fill="#fff" viewBox="0 0 100 80">
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
  );

  const CloseIcon = (
    <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
      <path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12l-4.89 4.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z" />
    </svg>
  );

  return (
    <nav style={styles.navbar}>
      {isMobile ? (
        <div style={styles.mobileContainer}>
          <div style={styles.mobileTop}>
          <img src={logoImage} alt="Logo" style={styles.logoImage} />

            <motion.button
              style={styles.menuButton}
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9, rotate: 90 }}
            >
              {menuOpen ? CloseIcon : HamburgerIcon}
            </motion.button>
          </div>

          {menuOpen && (
            <motion.ul
              style={styles.mobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {[...navItemsLeft, ...navItemsRight].map((item) => (
                <motion.li
                  key={item.id}
                  style={{
                    ...styles.navItem,
                    color: activeSection === item.id ? "#00FFFF" : "#fff",
                  }}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05, color: "#00FFFF" }}
                >
                  {item.label}
                </motion.li>
              ))}
              {/* <div style={styles.forbes}>Forbes Edition</div> */}
            </motion.ul>
          )}
        </div>
      ) : (
        <ul style={styles.navList}>
          {navItemsLeft.map((item) => (
            <motion.li
              key={item.id}
              style={{
                ...styles.navItem,
                borderBottom:
                  activeSection === item.id
                    ? "2px solid #00FFFF"
                    : "2px solid transparent",
              }}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="underline-hover">{item.label}</span>
            </motion.li>
          ))}

          <motion.div
            style={styles.logoBox}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src={logoImage} alt="Logo" style={styles.logoImage} />

            {/* <div style={styles.logo}>Wallet Hunter Shows</div>
            <motion.div
              style={styles.forbes}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Forbes Edition
            </motion.div> */}
          </motion.div>

          {navItemsRight.map((item) => (
            <motion.li
              key={item.id}
              style={{
                ...styles.navItem,
                borderBottom:
                  activeSection === item.id
                    ? "2px solid #00FFFF"
                    : "2px solid transparent",
              }}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="underline-hover">{item.label}</span>
            </motion.li>
          ))}
        </ul>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    width: "100%",
    padding: "1rem 2rem",
    background: "rgba(15, 15, 15, 0.7)", // Slight transparency for blur effect
    position: "fixed",
    top: 0,
    zIndex: 999,
    boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
    fontFamily: "'Orbitron', sans-serif",
    backdropFilter: "blur(10px)", // Blur effect
    WebkitBackdropFilter: "blur(10px)", // Safari support
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)", // Optional: subtle border
  },

  navList: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    fontSize: "1.1rem",
    color: "#ffffff",
    padding: 0,
    margin: 0,
    flexWrap: "wrap",
  },
  navItem: {
    cursor: "pointer",
    transition: "all 0.3s ease",
    position: "relative",
    paddingBottom: "5px",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#00FFFF",
    textShadow: "0 0 10px #00FFFF, 0 0 20px #00FFFF",
    whiteSpace: "nowrap",
  },
  logoImage: {
    height: "40px", // Adjust based on your design
    objectFit: "contain",
    cursor: "pointer"
  },
  
  logoBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "2rem",
    padding: "0 1rem",
    textAlign: "center",
  },
  forbes: {
    color: "#fff",
    fontWeight: "bold",
    padding: "0.3rem 0.7rem",
    marginLeft: "1rem",

    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  mobileContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    overflowX: "hidden",
  },
  
  mobileTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.5rem 1rem",
    width: "100%",
    maxWidth: "100vw", // <- Added this
    overflowX: "hidden", // <- Added this
    boxSizing: "border-box",
  },
  
  menuButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    display: "flex",
    alignItems: "right",
    justifyContent: "right",
    marginLeft: "auto",      // Pushes it to the right
  marginRight: "1rem",   
  },
  mobileMenu: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "1rem",
    padding: "0 1rem",
    color: "#ffffff",
    maxWidth: "100vw",  // Ensures it won't overflow
    overflowX: "hidden" // Prevents horizontal scroll
  },
  

  
};

export default Navbar;
