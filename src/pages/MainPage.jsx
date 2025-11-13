import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import "./MainPage.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

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

      {/* Floating Search Icon */}
      {/* Main Image */}
      <div className="main-image-container">
        <img
          src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/28a9f2c1bd8f7334b11bd3f91391382f.jpg"
          alt="Main Visual"
        />
        <div className="image-overlay">
          <h1>Premium Sale</h1>
          <p>-50% Off</p>
        </div>
      </div>

      {/* Logout Button */}
      <div className="logout-container">
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </>
  );
}
