import React, { useState } from "react";
import "./Navbar.css";
import { IconButton, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function Navbar() {
  // Language state
  const [langAnchor, setLangAnchor] = useState(null);
  const [language, setLanguage] = useState("English");

  // Currency state
  const [currAnchor, setCurrAnchor] = useState(null);
  const [currency, setCurrency] = useState("USD");

  // Handlers for language
  const handleLangClick = (event) => setLangAnchor(event.currentTarget);
  const handleLangClose = (lang) => {
    if (lang) setLanguage(lang);
    setLangAnchor(null);
  };

  // Handlers for currency
  const handleCurrClick = (event) => setCurrAnchor(event.currentTarget);
  const handleCurrClose = (curr) => {
    if (curr) setCurrency(curr);
    setCurrAnchor(null);
  };

  return (
    <nav className="navbar">
      {/* Logo in a box */}
      <div className="navbar-logo">Blossom</div>

      {/* Navbar links */}
      <ul className="navbar-links">
        <li><a href="#">Ideas</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Clothing</a></li>
        <li><a href="#">Shoes</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Brands</a></li>
        <li><a href="#">Sports</a></li>
        <li><a href="#">Premium</a></li>
        <li><a href="#" className="sale-link">Sale</a></li>
      </ul>

      {/* Right-side selectors */}
      <div className="navbar-selectors">
        {/* Language selector */}
        <div className="selector">
          <IconButton onClick={handleLangClick} color="inherit" size="small">
            <LanguageIcon fontSize="small" />
          </IconButton>
          <span>{language}</span>
          <Menu
            anchorEl={langAnchor}
            open={Boolean(langAnchor)}
            onClose={() => handleLangClose(null)}
          >
            <MenuItem onClick={() => handleLangClose("English")}>English</MenuItem>
            <MenuItem onClick={() => handleLangClose("Russian")}>Russian</MenuItem>
            <MenuItem onClick={() => handleLangClose("Uzbek")}>Uzbek</MenuItem>
          </Menu>
        </div>

        {/* Currency selector */}
        <div className="selector">
          <IconButton onClick={handleCurrClick} color="inherit" size="small">
            <AttachMoneyIcon fontSize="small" />
          </IconButton>
          <span>{currency}</span>
          <Menu
            anchorEl={currAnchor}
            open={Boolean(currAnchor)}
            onClose={() => handleCurrClose(null)}
          >
            <MenuItem onClick={() => handleCurrClose("USD")}>USD</MenuItem>
            <MenuItem onClick={() => handleCurrClose("EUR")}>EUR</MenuItem>
            <MenuItem onClick={() => handleCurrClose("UZS")}>UZS</MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
