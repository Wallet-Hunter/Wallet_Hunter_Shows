import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoadingPage from "./components/LoadingPage";
import Footer from "./components/sections/Footer";
import CommunityPartnerForm from "./components/forms/CommunityPartnerForm"; // <-- new form page
import MediaPartnerForm from "./components/forms/MediaPartnerForm";

export const sectionStyles = {
  section: {
    height: "100vh",
    padding: "4rem",
    background: "linear-gradient(135deg, #1a1a2e, #16213e)",
    color: "white",
    fontFamily: "'Orbitron', sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid #00ffff33",
  },
  h2: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#00ffff",
  },
  p: {
    fontSize: "1.1rem",
    maxWidth: "600px",
    textAlign: "center",
    color: "#ddd",
  },
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);

    // Inject Playfair Display font
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return loading ? <LoadingPage /> : <AppRoutes />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/be-a-media-partner" element={<CommunityPartnerForm />} />
        <Route path="/mediapartnerform" element={<MediaPartnerForm />} />
      </Routes>
    </Router>
  );
};

const MainPage = () => {
  return (
    <div style={{ margin: 0, background: "#0d0d0d", overflowX: "hidden" }}>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
