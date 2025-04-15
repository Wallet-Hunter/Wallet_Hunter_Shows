import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/images/close-up-microphone-pop-filter.png";
import video from "../../assets/videos/HeroVideo.mp4";
import WHLogo from "../../assets/images/WH_Logo_Transparent_.png";
import comingsoon from "../../assets/images/comingsoon2.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <style>
        {`
          @keyframes moveBG {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(0);
  }
}
            
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 5vw 50px 5vw;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap; /* Add this if needed */
}


          .bg-glow {
            position: fixed;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 100%;
            background: radial-gradient(circle at center, rgb(11, 237, 237,1), #000000, #000000);
            animation: moveBG 15s ease-in-out infinite;
            z-index: 0;
            filter: blur(150px);
          }

          .content-wrapper {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            max-width: 1400px;
            
            gap: 40px;
            flex-wrap: wrap;
          }

          .text-content {
            flex: 1;
            max-width: 600px;
            text-align: left;
          }

          .heading {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 0.5rem;
}
  


.subheading {
  font-size: 1.5rem;
  font-weight: 600;
  color: #54d5d9;
  text-align: center;
  margin-top: 0;
}

.glow-span {
  color: #54d5d9;
  text-shadow: 0 0 10px #54d5d9, 0 0 20px #54d5d9;
}

.forbes-highlight {
  color: #ffffff;
  background: linear-gradient(to right, #54d5d9, #00e0e0);
  padding: 0.3rem 0.8rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(84, 213, 217, 0.7);
  display: inline-block;
}


          .glow-span {
            color: #00ffff;
            text-shadow: 0 0 10px #00ffffaa, 0 0 20px #00ffffaa;
          }

          .paragraph {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #ffffff;
  margin-top: 40px; /* Add this line */
  font-weight: bold;
  text-align: center;
}


 .button-wrapper {
   justify-content: flex-end; /* Aligns to the right */
  align-items: center; 
  align-items: center;
  height: 100vh;  /* Full height */
  width: 100vw;   /* Full width */
  position: relative;
}

.cta-button {
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative; /* Needed for ::before */
  background-color: transparent;
  color: #00ffff;
  font-weight: 600;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  max-width: 200px;

  overflow: hidden;
  z-index: 1;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
}

.cta-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(0, 255, 255, 0.2), transparent);
  transition: all 0.4s ease-in-out;
  z-index: 0;
}


.cta-button:hover::before {
  left: 100%;
}

.cta-button:hover {
  background-color: rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 15px #00ffff, 0 0 30px rgba(0, 255, 255, 0.5);
  color: #ffffff;
  border-color: #00ffff;
}


          .image-container {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          }

          .hero-image {
            width: 100%;
            max-width: 500px;
            object-fit: contain;
            transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
            
          }

          .available-on {
  
  display: flex;
  flex-direction: column;
  align-items: center;  /* Centers items horizontally */
  justify-content: center; /* Optional: center vertically if needed */
  text-align: center;
}

.available-text {
  font-size: 1.2rem; /* Slightly larger */
  font-weight: bold;
  margin-bottom: 10px;
  color: #00ffff;
  letter-spacing: 1px;
  animation: pulse-glow 2s infinite ease-in-out;
}





          .icon-row {
            display: flex;
            gap: 15px;
            align-items: center;
            flex-wrap: wrap;
          }

          .icon {
            width: 40px;
            height: 40px;
            object-fit: contain;
            
            transition: transform 0.3s ease;
            cursor: pointer;
          }

          @media (max-width: 1024px) {
            .content-wrapper {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }

            .text-content {
              max-width: 100%;
              text-align: center;
            }

            .hero-image {
              max-width: 350px;
              margin-top: 20px;
            }
          }




            
          
   

        `}
      </style>

      <div className="bg-glow"></div>

      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="heading-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <motion.img
              src={WHLogo}
              alt="Wallet Hunter Logo"
              className="hero-logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            /> */}
            <motion.h1
              className="heading"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98, rotate: -1 }}
            >
              Welcome to <span className="glow-span">Wallet Hunter Show</span>
            </motion.h1>

            <motion.h2
              className="subheading"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="forbes-highlight">Forbes Web3 Edition</span>
            </motion.h2>
          </motion.div>

          <p className="paragraph">The Voice of Web3 Visionaries.</p>
          {/* <motion.button
            className="cta-button"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#00ffff",
              color: "#000000",
              boxShadow: "0 0 12px #00ffff, 0 0 25px #00ffff",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button> */}

          <div className="available-on">
            <p className="available-text">Coming Soon On</p>
            <div className="icon-row">
              {[
                {
                  src: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                  alt: "LinkedIn",
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                  alt: "YouTube",
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/2111/2111624.png",
                  alt: "Spotify",
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
                  alt: "Telegram",
                },
              ].map((icon, index) => (
                <img
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  className="icon"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="image-container"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={comingsoon} // replace with the correct image if needed
            alt="Hero Visual"
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
