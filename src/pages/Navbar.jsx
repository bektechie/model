// src/Navbar.jsx
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

  // LANGUAGE MENU STATE
  const [langAnchor, setLangAnchor] = useState(null);
  const openLang = Boolean(langAnchor);

  // CURRENCY MENU STATE
  const [currAnchor, setCurrAnchor] = useState(null);
  const openCurr = Boolean(currAnchor);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => navigate("/")}>
          Blossom
        </div>

        {/* Center Links */}
        <ul className="navbar-links">
          <li><a>Ideas</a></li>
          <li><a>News</a></li>
          <li><a>Clothing</a></li>
          <li><a>Shoes</a></li>
          <li><a>Accessories</a></li>
          <li><a>Brands</a></li>
          <li><a>Sports</a></li>
          <li><a>Premium</a></li>

          {/* SALE PAGE LINK */}
          <li>
            <a className="sale-link" onClick={() => navigate("/sale")}>
              Sale
            </a>
          </li>
        </ul>

        {/* Right section */}
        <div className="navbar-selectors">
          {/* Search Button */}
          <IconButton onClick={() => navigate("/search")}>
            <SearchIcon />
          </IconButton>

          {/* LANGUAGE DROPDOWN */}
          <div className="selector">
            <IconButton size="small" onClick={(e) => setLangAnchor(e.currentTarget)}>
              <LanguageIcon fontSize="small" />
            </IconButton>
            EN
          </div>

          {/* POPUP MENU FOR LANGUAGE */}
          <Menu anchorEl={langAnchor} open={openLang} onClose={() => setLangAnchor(null)}>
            <MenuItem onClick={() => setLangAnchor(null)}>English</MenuItem>
            <MenuItem onClick={() => setLangAnchor(null)}>Russian</MenuItem>
            <MenuItem onClick={() => setLangAnchor(null)}>Uzbek</MenuItem>
          </Menu>

          {/* CURRENCY DROPDOWN */}
          <div className="selector">
            <IconButton size="small" onClick={(e) => setCurrAnchor(e.currentTarget)}>
              <AttachMoneyIcon fontSize="small" />
            </IconButton>
            USD
          </div>

          {/* POPUP MENU FOR CURRENCY */}
          <Menu anchorEl={currAnchor} open={openCurr} onClose={() => setCurrAnchor(null)}>
            <MenuItem onClick={() => setCurrAnchor(null)}>USD</MenuItem>
            <MenuItem onClick={() => setCurrAnchor(null)}>EUR</MenuItem>
            <MenuItem onClick={() => setCurrAnchor(null)}>UZS</MenuItem>
          </Menu>

          {/* LOGIN BUTTON */}
          <button className="login-btn" onClick={() => navigate("/signup")}>
            Log In
          </button>

          {/* Just Icon */}
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>
      </nav>
    </>
  );
}
