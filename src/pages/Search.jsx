import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      name: "Classic T-Shirt",
      brand: "H & M",
      price: "$25",
      image:
        "https://i.pinimg.com/736x/91/4d/59/914d598362f6cd82000087028478cdfc.jpg",
    },
    {
      name: "Running Shoes",
      brand: "Solomon",
      price: "$80",
      image:
        "https://png.pngtree.com/png-vector/20241123/ourlarge/pngtree-stylish-white-sneakers-product-photography-perfect-for-branding-and-marketing-flyer-png-image_14545397.png",
    },
    {
      name: "Comfy Hoodie",
      brand: "Big Poo",
      price: "$50",
      image:
        "https://pixpine.com/wp-content/uploads/2025/11/men-hoodie-mockup-front-view-1-15185.jpg",
    },
    {
      name: "Blue Jeans",
      brand: "Morco-polo",
      price: "$60",
      image:
        "https://i.pinimg.com/236x/0c/b7/95/0cb79523e1911a132d745c34d4dc46e8.jpg",
    },
    {
      name: "Leather Jacket",
      brand: "K-swiss",
      price: "$120",
      image:
        "https://takemysnap.com/wp-content/uploads/2023/09/ghost-mannequin-leather-jacket-product-photography-karachi-studio-1-800x800.jpg",
    },
    {
      name: "Hat & Accessories",
      brand: "Tankss",
      price: "$30",
      image:
        "https://images.squarespace-cdn.com/content/v1/65a01343d4e0b521531eda0a/1704989565536-8JNLKT42R31X15FQUHDT/mens%2Bfashion%2Baccessories%2Bstill%2Blife%2Bhowlett%2Bphotography.jpg",
    },
  ];

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-page">
      {/* Search Input */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Featured Heading */}
      <h2 className="featured-heading">Featured in Blossom</h2>

      {/* Product Cards */}
      <div className="product-cards-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.name} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-brand">{product.brand}</p>
              <p className="product-price">{product.price}</p>
            </div>
          ))
        ) : (
          <p style={{ marginLeft: "40px", fontSize: "18px" }}>
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
