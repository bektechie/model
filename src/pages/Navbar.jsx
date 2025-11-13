import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  // Language & Currency
  const [langAnchor, setLangAnchor] = useState(null);
  const [language, setLanguage] = useState("English");

  const [currAnchor, setCurrAnchor] = useState(null);
  const [currency, setCurrency] = useState("USD");

  // Mobile Menu
  const [menuAnchor, setMenuAnchor] = useState(null);
  const openMenu = Boolean(menuAnchor);

  const menuCategories = {
    Men: ["Shoes", "Clothes", "Accessories", "Sports"],
    Women: ["Shoes", "Clothes", "Accessories", "Sports"],
    Kids: ["Shoes", "Clothes", "Accessories", "Sports"],
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo" onClick={() => navigate("/")}>
        Blossom
      </div>

      {/* Navbar Links */}
      <ul className="navbar-links">
        {[
          "Ideas",
          "News",
          "Clothing",
          "Shoes",
          "Accessories",
          "Brands",
          "Sports",
          "Premium",
        ].map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
        <li>
          <a href="#" className="sale-link">
            Sale
          </a>
        </li>
      </ul>

      {/* Right-side selectors */}
      <div className="navbar-selectors">
        {/* Search Icon */}
        <IconButton
          onClick={() => navigate("/search")} // Navigate to Search page
          color="inherit"
          size="large"
        >
          <SearchIcon />
        </IconButton>

        {/* Language */}
        <div className="selector">
          <IconButton
            onClick={(e) => setLangAnchor(e.currentTarget)}
            color="inherit"
            size="small"
          >
            <LanguageIcon fontSize="small" />
          </IconButton>
          <span>{language}</span>
          <Menu
            anchorEl={langAnchor}
            open={Boolean(langAnchor)}
            onClose={() => setLangAnchor(null)}
          >
            <MenuItem onClick={() => setLanguage("English")}>English</MenuItem>
            <MenuItem onClick={() => setLanguage("Russian")}>Russian</MenuItem>
            <MenuItem onClick={() => setLanguage("Uzbek")}>Uzbek</MenuItem>
          </Menu>
        </div>

        {/* Currency */}
        <div className="selector">
          <IconButton
            onClick={(e) => setCurrAnchor(e.currentTarget)}
            color="inherit"
            size="small"
          >
            <AttachMoneyIcon fontSize="small" />
          </IconButton>
          <span>{currency}</span>
          <Menu
            anchorEl={currAnchor}
            open={Boolean(currAnchor)}
            onClose={() => setCurrAnchor(null)}
          >
            <MenuItem onClick={() => setCurrency("USD")}>USD</MenuItem>
            <MenuItem onClick={() => setCurrency("EUR")}>EUR</MenuItem>
            <MenuItem onClick={() => setCurrency("UZS")}>UZS</MenuItem>
          </Menu>
        </div>

        {/* Log In Button */}
        <button className="login-btn" onClick={() => navigate("/signup")}>
          Log In
        </button>

        {/* Hamburger Menu */}
        <div className="menu-container">
          <IconButton
            onClick={(e) => setMenuAnchor(e.currentTarget)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={openMenu}
            onClose={() => setMenuAnchor(null)}
          >
            {Object.keys(menuCategories).map((cat) => (
              <MenuItem key={cat} onClick={() => setMenuAnchor(null)}>
                {cat}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </nav>
  );
}
