import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ava Nexus",
    role: "AI Engineer",
    quote: "This platform redefines the future. Seamless, smart, and stunning!",
  },
  {
    name: "Liam Vega",
    role: "Product Designer",
    quote: "The UI/UX is exceptional. Never seen such fluid interactions before!",
  },
  {
    name: "Noah Vortex",
    role: "Cybersecurity Analyst",
    quote: "Secure, scalable, and futuristic. This product is lightyears ahead.",
  },
];

const Testimonials = () => {
  const styles = {
    section: {
      padding: "4rem 1.5rem",
      background: "#0c0c1b",
      color: "#fff",
      fontFamily: "'Orbitron', sans-serif",
    },
    heading: {
      fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)",
      textAlign: "center",
      marginBottom: "2.5rem",
      textTransform: "uppercase",
      letterSpacing: "2px",
      background: "linear-gradient(to right, #00ffe1, #9f00ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    container: {
      display: "flex",
      flexWrap: "nowrap",
      gap: "1.5rem",
      overflowX: "auto",
      scrollSnapType: "x mandatory",
      paddingBottom: "2rem",
      scrollbarWidth: "none",
    },
    card: {
      minWidth: "280px",
      maxWidth: "90%",
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(0, 255, 255, 0.2)",
      borderRadius: "16px",
      padding: "1.5rem",
      boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
      backdropFilter: "blur(10px)",
      scrollSnapAlign: "start",
      flexShrink: 0,
      transition: "transform 0.3s ease",
    },
    quote: {
      fontSize: "clamp(0.9rem, 2vw, 1rem)",
      lineHeight: "1.6",
      color: "#e0e0e0",
      marginBottom: "1.2rem",
    },
    name: {
      fontWeight: "bold",
      fontSize: "1.05rem",
      color: "#00ffe1",
    },
    role: {
      fontSize: "0.9rem",
      color: "#b3b3b3",
    },

    // Hide scrollbars across all browsers
    hideScrollbar: {
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
  };

  return (
    <section id="testimonials" style={styles.section}>
      <h2 style={styles.heading}>Testimonials</h2>
      <div style={{ ...styles.container, ...styles.hideScrollbar }}>
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <p style={styles.quote}>“{item.quote}”</p>
            <p style={styles.name}>{item.name}</p>
            <p style={styles.role}>{item.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
