import React, { useState } from "react";
import Navbar from "./Navbar";
import "./SearchPage.css";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

export default function SearchPage() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const categories = [
    {
      name: "Clothing",
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    },
    {
      name: "Shoes",
      img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    },
    {
      name: "Accessories",
      img: "https://images.pexels.com/photos/2983462/pexels-photo-2983462.jpeg",
    },
    {
      name: "Brands",
      img: "https://images.unsplash.com/photo-1521334884684-d80222895322",
    },
    {
      name: "Sports",
      img: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
    },
  ];

  const clothingItems = ["T-Shirts", "Formal Shirts", "Jackets", "Jeans", "Suits"];
  const shoeItems = ["Sneakers", "Boots", "Running Shoes", "Heels", "Sandals"];

  const handleOpen = (category) => {
    setSelectedCategory(category);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const handleSearchClose = () => setSearchOpen(false);

  return (
    <>
      <Navbar />
      <div className="search-page">
        <h1>Explore Categories</h1>

        {/* 🔍 Search Bar */}
        <div className="search-bar" onClick={() => setSearchOpen(true)}>
          <input type="text" placeholder="Search items..." readOnly />
          <Button variant="contained" color="primary">Search</Button>
        </div>

        {/* 🛍️ Category Grid */}
        <div className="category-grid">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="category-card"
              onClick={() => handleOpen(cat)}
            >
              <img src={cat.img} alt={cat.name} />
              <p>{cat.name}</p>
            </div>
          ))}
        </div>

        {/* 📦 Category Modal */}
        <Modal open={open} onClose={handleClose}>
          <Box className="modal-box">
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {selectedCategory?.name}
            </Typography>
            <img
              src={selectedCategory?.img}
              alt={selectedCategory?.name}
              className="modal-img"
            />
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              Discover top-quality {selectedCategory?.name.toLowerCase()} collections now!
            </Typography>
          </Box>
        </Modal>

        {/* 🔍 Search Modal */}
        <Modal open={searchOpen} onClose={handleSearchClose}>
          <Box className="modal-box">
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              Search by Category
            </Typography>
            <Typography variant="h6">👕 Clothing</Typography>
            <ul>
              {clothingItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <Typography variant="h6" sx={{ mt: 2 }}>
              👟 Shoes
            </Typography>
            <ul>
              {shoeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Box>
        </Modal>
      </div>
    </>
  );
}
