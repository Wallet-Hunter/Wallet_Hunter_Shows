import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/images/NewsLetter2.png";

const Newsletter = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive values
  const isTablet = screenWidth <= 768;
  const isMobile = screenWidth <= 480;

  const styles = {
    section: {
      padding: "5rem 1rem",
      background: `url(${bgImage}) center/cover no-repeat`,
      color: "#ffffff",
      fontFamily: "'Orbitron', sans-serif",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
      minHeight: "100vh",
    },

    card: {
      background: "rgba(0, 255, 255, 0.2)",
      borderRadius: "20px",
      padding: "2rem 1rem",
      maxWidth: "600px",
      width: "100%",
      border: "2px solid #54d5d9",
      boxShadow: "0 0 20px #00fff7",
      backdropFilter: "blur(14px)",
      position: "relative",
      zIndex: 2,
      animation: "pulse 3s infinite",
    },

    heading: {
      fontSize: isMobile ? "1.5rem" : isTablet ? "1.8rem" : "2rem",
      marginBottom: "1rem",
      background: "linear-gradient(to right, #00fff7,#54d5d9)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: "1.2px",
    },

    description: {
      fontSize: "1rem",
      lineHeight: "1.7",
      color: "#c0c0c0",
      marginBottom: "2rem",
      textAlign: "center",
    },

    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center",
    },

    input: {
      width: isMobile ? "90%" : "100%",
      maxWidth: "400px",
      padding: "0.9rem 1.2rem",
      borderRadius: "12px",
      border: "1px solid rgba(0, 255, 255, 0.4)",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      color: "#fff",
      fontSize: "1rem",
      outline: "none",
    },

    button: {
      width: isMobile ? "90%" : "auto",
      padding: "0.9rem 2rem",
      borderRadius: "10px",
      background: "linear-gradient(to right,rgb(14, 237, 229),rgb(8, 55, 56))",
      color: "#ffffff",
      fontWeight: "bold",
      border: "none",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      boxShadow: "0 0 15px rgba(0, 255, 255, 0.4)",
    },

    backgroundGlow: {
      content: '""',
      position: "absolute",
      width: "420px",
      height: "420px",
      background: "radial-gradient(circle, rgba(0,255,255,0.12) 0%, transparent 70%)",
      borderRadius: "50%",
      zIndex: 1,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      filter: "blur(60px)",
    },

    // Keyframe as an inline <style> tag content
    keyframes: `
      @keyframes pulse {
        0% { transform: scale(1); box-shadow: 0 0 15px rgba(0, 255, 255, 0.3); }
        50% { transform: scale(1.05); box-shadow: 0 0 25px rgba(0, 200, 255, 0.6); }
        100% { transform: scale(1); box-shadow: 0 0 15px rgba(0, 255, 255, 0.3); }
      }
    `,
  };

  return (
    <>
      <style>{styles.keyframes}</style>
      <section id="newsletter" style={styles.section}>
        <div style={styles.backgroundGlow}></div>
        <motion.div
          style={styles.card}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={styles.heading}>Join the Newsletter</h2>
          <p style={styles.description}>
            Be part of our tech journey. Get exclusive insights, updates, and sneak peeks into our next-gen features delivered directly to your inbox.
          </p>

          <form
            style={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              alert("You're in! 🔮");
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>
              Subscribe Now
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Newsletter;
