import React from "react";
import HeroSection from "./sections/Hero";
import About from "./sections/About";
import Speakers from "./sections/Speakers";
import Testimonials from "./sections/Testimonials";
import MediaPartners from "./sections/MediaPartners";
import Blog from "./sections/Blog";
import Newsletter from "./sections/NewsLetter";
import ComingSoon from "./sections/ComingSoon";
import CommunityPartners from "./sections/CommunityPartner";


const Home = () => {
  return (
    <>
    <HeroSection />
      <About />
      {/* <ComingSoon /> */}
      <Speakers />
      
      <MediaPartners />
      <CommunityPartners />
      <Blog />
      <Newsletter />
      
    </>
  );
};

export default Home;
