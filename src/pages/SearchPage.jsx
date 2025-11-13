import React, { useState } from "react";
import Navbar from "./Navbar";
import "./SearchPage.css";
import { IconButton, Menu, MenuItem, Typography, Box, Modal, TextField, Button } from "@mui/material";

export default function SearchPage() {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [openCat, setOpenCat] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleOpenCat = (category) => {
    setSelectedCategory(category);
    setOpenCat(true);
  };
  const handleCloseCat = () => setOpenCat(false);

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchTerm("");
  };

  const menuCategories = {
    Men: { Shoes: ["Sneakers", "Boots"], Clothes: ["T-Shirts"], Accessories: ["Belts"], Sports: ["Running Gear"] },
    Women: { Shoes: ["Heels"], Clothes: ["Dresses"], Accessories: ["Bags"], Sports: ["Yoga Wear"] },
    Kids: { Shoes: ["Sneakers"], Clothes: ["T-Shirts"], Accessories: ["Caps"], Sports: ["Mini Jerseys"] },
  };

  const categories = [
    { name: "Clothing", img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg" },
    { name: "Shoes", img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg" },
    { name: "Accessories", img: "https://images.pexels.com/photos/2983462/pexels-photo-2983462.jpeg" },
    { name: "Brands", img: "https://images.unsplash.com/photo-1521334884684-d80222895322" },
    { name: "Sports", img: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg" },
  ];

  return (
    <>
      <Navbar />
      <div className="search-page">
        <IconButton onClick={handleMenuOpen} sx={{ backgroundColor: "#f5f5f5" }}>
          <div style={{ width: 25, height: 3, backgroundColor: "#333" }} />
          <div style={{ width: 25, height: 3, backgroundColor: "#333" }} />
          <div style={{ width: 25, height: 3, backgroundColor: "#333" }} />
        </IconButton>

        <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose}>
          <Box display="flex" justifyContent="space-around">
            {Object.entries(menuCategories).map(([mainCat, subCats]) => (
              <Box key={mainCat}>
                <Typography sx={{ fontWeight: "bold" }}>{mainCat}</Typography>
                {Object.entries(subCats).map(([subCat, items]) => (
                  <Box key={subCat}>
                    <Typography sx={{ fontWeight: 600 }}>{subCat}</Typography>
                    {items.map((item) => (
                      <MenuItem key={item} onClick={handleMenuClose}>{item}</MenuItem>
                    ))}
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Menu>

        <h1>Explore Categories</h1>
        <div className="category-grid">
          {categories.map((cat) => (
            <div key={cat.name} className="category-card" onClick={() => handleOpenCat(cat)}>
              <img src={cat.img} alt={cat.name} />
              <p>{cat.name}</p>
            </div>
          ))}
        </div>

        <Modal open={openCat} onClose={handleCloseCat}>
          <Box className="modal-box">
            <Typography variant="h5">{selectedCategory?.name}</Typography>
            <img src={selectedCategory?.img} alt={selectedCategory?.name} />
          </Box>
        </Modal>
      </div>
    </>
  );
}
