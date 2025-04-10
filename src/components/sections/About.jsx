import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const styles = {
    section: {
      paddingTop: "2rem",
    paddingBottom: "4rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
      background: "#0c0c0c",
      color: "#00f0ff",
      fontFamily: "'Orbitron', sans-serif",
      textAlign: "center",
      backdropFilter: "blur(8px)",
      position: "relative",
       maxWidth: "100vw", // ✅ Prevents horizontal overflow
  overflowX: "hidden", // ✅ Ensures no accidental scrolling
  boxSizing: "border-box", // ✅ Include padding in width calculations
    },
    heading: {
      fontSize: "2.8rem",
      marginBottom: "1rem",
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    subtext: {
      maxWidth: "800px",
      margin: "0 auto",
      fontSize: "1.1rem",
      lineHeight: "1.8",
      color: "#cccccc",
      background: "rgba(0, 255, 255, 0.05)",
      padding: "1.5rem",
      borderRadius: "16px",
      border: "1px solid rgba(0, 255, 255, 0.2)",
      boxShadow: "0 0 20px rgba(0, 255, 255, 0.05)",
    },
    glowEffect: {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "radial-gradient(circle at center, rgba(7, 238, 238, 0.1) 0%, transparent 70%)",
      zIndex: 0,
    },
  };

  return (
    <section id="about" style={styles.section}>
      <div style={styles.glowEffect}></div>

      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h2>

      <motion.p
        style={styles.subtext}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The Wallet Hunter Show: Forbes Edition is the premier Web3 podcast where we spotlight the top minds in the industry, including visionary founders, savvy investors, seasoned traders, and bold changemakers. We offer exclusive insights into what it truly takes to succeed in the decentralized world.

      </motion.p>
    </section>
  );
};

export default About;
