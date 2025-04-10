import React from "react";
import { motion } from "framer-motion";
import videoBg from "../assets/videos/LoadingBg2.mp4"; // Replace with your actual video file path

const LoadingPage = () => {
  return (
    <div style={styles.container}>
      {/* Background Video */}
      <div style={styles.videoWrapper}>
        <video autoPlay loop muted style={styles.videoBackground}>
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Animated Loader */}
      {/* <motion.div
        style={styles.loader}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      /> */}

      {/* Loading Text
      <motion.h1
        style={styles.text}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Loading...
      </motion.h1> */}
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "black",
  },
  videoWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%", // Adjust width as needed
    height: "80%", // Adjust height as needed
    overflow: "hidden",
  },
  videoBackground: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  loader: {
    width: "80px",
    height: "80px",
    border: "8px solid rgba(0, 255, 255, 0.3)",
    borderTop: "8px solid cyan",
    borderRadius: "50%",
    marginBottom: "20px",
  },
  text: {
    fontSize: "2rem",
    fontWeight: "bold",
    textShadow: "0px 0px 15px cyan",
    color: "white",
  },
};

export default LoadingPage;