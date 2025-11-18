import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import "./MainPage.css";

export default function MainPage() {
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("fake_auth_log_in");
    if (!isLoggedIn) {
      navigate("/signin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("fake_auth_log_in");
    navigate("/signin");
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="main-image-container">
        <img
          src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/28a9f2c1bd8f7334b11bd3f91391382f.jpg"
          alt="Main Visual"
        />

        {/* TEXT OVERLAY - EXACT MATCH */}
        <div className="image-overlay">
          <h1>Premium sale</h1>
          <p>— 50%</p>
          <button className="premium-btn">Premium shop</button>
        </div>

        {/* CAROUSEL DOTS */}
        <div className="carousel-dots">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      {/* LOGOUT BUTTON */}
      <div className="logout-container">
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </>
  );
}
