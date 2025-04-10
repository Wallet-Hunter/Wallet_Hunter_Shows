import React, { useRef, useState, useEffect } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

import YevheniiaBroshevanProfile from  "../../assets/images/speakers/Yevheniia Broshevan.jpg"
import HichamSbaaProfile from "../../assets/images/speakers/Hicham Sbaa .jpg"
import VincenzoStefaniniProfile  from "../../assets/images/speakers/Vincenzo Stefanini.jpg"
import NFTDUDUProfile from "../../assets/images/speakers/NFTDUDU.jpg";
import MikeProfile from "../../assets/images/speakers/MikeProfile.jpg";

const speakerData = [
  {
    name: "Yevheniia Broshevan",
    image: YevheniiaBroshevanProfile,
    description: "Co-Founder @ Hacken",
    twitter: "https://x.com/jerh17",
    linkedin: "https://www.linkedin.com/in/broshevan/",
    telegram: "https://web.telegram.org/k/#@jerh17",
  },
  {
    name: "Hicham",
    image: HichamSbaaProfile,
    description: "Founder of @ProleoPR and @BTCWire",
    twitter: "https://x.com/ChamSbaa",
    linkedin: "https://www.linkedin.com/in/hicham-sbaa/?originalSubdomain=tr",
    telegram: "https://web.telegram.org/k/#@ChamSbaa",
  },
  {
    name: "Vincenzo Stefanini",
    image: VincenzoStefaniniProfile,
    description: "Founder of Web3 Digital & Crypto Breaking | eToro Popular Investo",
    twitter: "https://x.com/vincentstefanin",
    linkedin: "https://www.linkedin.com/in/vincenzostefanini/?originalSubdomain=uk",
    telegram: "https://web.telegram.org/k/#@vincenzost",
  },
  {
    name: "NFTDUDU",
    image: NFTDUDUProfile,
    description: "",
    twitter: "https://x.com/NFT_DUDU",
    //linkedin: "https://linkedin.com/in/lunaprotocol",
    telegram: "https://web.telegram.org/k/#@NFTDUDU",
  },

  {
    name: "Mike",
    image: MikeProfile,
    description: "🚀 Founder & CEO of adpod.xyz, Ex Publicis Group/Leo Burnett. 🎼 composer, producer. ",
    //twitter: "https://twitter.com/lunaprotocol",
    //linkedin: "https://linkedin.com/in/lunaprotocol",
    telegram: "https://web.telegram.org/k/#@mike_adpod",
  },
  
];

const Speakers = () => {
  const scrollRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = 320; // including gap

  useEffect(() => {
    const container = scrollRef.current;
  
    const updateActiveIndex = () => {
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index % speakerData.length); // loop around
    };
  
    const handleAutoScroll = () => {
      const nextIndex = activeIndex + 1;
  
      if (nextIndex >= speakerData.length) {
        // Smooth scroll to end first (optional), then jump to start
        container.scrollTo({
          left: 0,
          behavior: "auto", // Instantly reset to start
        });
        setActiveIndex(0);
      } else {
        container.scrollTo({
          left: nextIndex * cardWidth,
          behavior: "smooth",
        });
        setActiveIndex(nextIndex);
      }
    };
  
    const scrollInterval = setInterval(handleAutoScroll, 3000);
    container.addEventListener("scroll", updateActiveIndex);
  
    return () => {
      clearInterval(scrollInterval);
      container.removeEventListener("scroll", updateActiveIndex);
    };
  }, [activeIndex, speakerData.length, cardWidth]);
  
  

  const styles = {
    section: {
      padding: "5rem 1rem",
      background: "linear-gradient(-45deg, #0d0d0d, #1a2c2d, rgba(0, 255, 255, 0.3)",
      backgroundSize: "400% 400%",
      animation: "gradientMove 15s ease infinite",
      color: "#54d5d9",
      fontFamily: "'Orbitron', sans-serif",
      position: "relative",
      overflow: "hidden",
    },
    heading: {
      textAlign: "center",
      fontSize: "2.5rem",
      marginBottom: "0.5rem",
    },
    subtext: {
      textAlign: "center",
      fontSize: "1rem",
      marginBottom: "2rem",
      color: "#ccc",
    },
    scrollWrapper: {
      position: "relative",
    },
    scrollContainer: {
      display: "flex",
      gap: "1.5rem",
      overflowX: "auto",
      scrollBehavior: "smooth",
      padding: "1rem 2.5rem 1rem 4rem", // ← Increased left padding here
      scrollbarWidth: "none",
    },
    

    card: {
      minWidth: "260px",
      maxWidth: "260px",
      background: "rgba(255, 255, 255, 0.05)",
      border: "2px solid rgba(0, 255, 255, 0.3)",
      borderRadius: "16px",
      padding: "1.5rem",
      textAlign: "center",
      color: "#e0f7ff",
      boxShadow: "0 0 18px rgba(0, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
    },
    image: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      border: "3px solid #00f0ff",
      marginBottom: "1rem",
      objectFit: "cover",
    },
    name: {
      fontSize: "1.2rem",
      color: "#00f0ff",
      marginBottom: "0.5rem",
    },
    description: {
      fontSize: "0.95rem",
      color: "#ccc",
      marginBottom: "1rem",
    },
    socials: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
    },
    icon: {
      color: "#00f0ff",
      fontSize: "1.5rem",
      transition: "color 0.3s ease",
    },
  };

  return (
    <section id="speakers" style={styles.section}>
      <h2 style={styles.heading}>SPEAKERS</h2>
      <p style={styles.subtext}>The minds behind the future of tech & Web3.</p>

      <div style={styles.scrollWrapper}>
        <div style={styles.scrollContainer} ref={scrollRef}>
          {speakerData.map((speaker, index) => (
            <motion.div
              key={index}
              style={styles.card}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <img src={speaker.image} alt={speaker.name} style={styles.image} />
              <h3 style={styles.name}>{speaker.name}</h3>
              <p style={styles.description}>{speaker.description}</p>
              <div style={styles.socials}>
                <a href={speaker.twitter} target="_blank" rel="noreferrer">
                  <FaTwitter style={styles.icon} />
                </a>
                <a href={speaker.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin style={styles.icon} />
                </a>
                <a href={speaker.telegram} target="_blank" rel="noreferrer">
                  <FaTelegramPlane style={styles.icon} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots below the scroll */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
          {speakerData.map((_, i) => (
            <div
              key={i}
              onClick={() =>
                scrollRef.current.scrollTo({ left: i * cardWidth, behavior: "smooth" })
              }
              style={{
                width: activeIndex === i ? "16px" : "10px",
                height: "10px",
                borderRadius: "50%",
                margin: "0 6px",
                backgroundColor: activeIndex === i ? "#00f0ff" : "#555",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
