import React, { useState } from "react";
import Navbar from "./Navbar";
import "./SearchPage.css";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { name: "Sneakers Nike Air", brand: "Nike", img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg" },
    { name: "Sneakers Adidas UltraBoost", brand: "Adidas", img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg" },
    { name: "T-shirt Levis", brand: "Levis", img: "https://images.pexels.com/photos/6311398/pexels-photo-6311398.jpeg" },
    { name: "T-shirt Sport Adidas", brand: "Adidas", img: "https://images.pexels.com/photos/6311398/pexels-photo-6311398.jpeg" },
    { name: "Jacket Zara Casual", brand: "Zara", img: "https://images.pexels.com/photos/1583395/pexels-photo-1583395.jpeg" },
  ];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="search-container">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search products"
            className="main-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {searchTerm && (
            <span className="search-close-btn" onClick={() => setSearchTerm("")}>✕</span>
          )}
        </div>

        {searchTerm && (
          <div className="search-result-box">
            <div className="result-count">{filtered.length} products</div>
            <p className="result-title">Results</p>

            <div className="result-list">
              {filtered.length === 0 ? (
                <p>No items found</p>
              ) : (
                filtered.map((item, index) => (
                  <div key={index} className="result-item">
                    <img src={item.img} className="result-thumb" />
                    <div>
                      <span className="item-name">{item.name}</span>
                      <br />
                      <span className="item-brand">{item.brand}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
