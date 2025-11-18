import "./SalePage.css";

export default function SalePage() {
  const categories = [
    { name: "T-Shirts", img: "https://images.pexels.com/photos/6311398/pexels-photo-6311398.jpeg" },
    { name: "Hoodies", img: "https://images.pexels.com/photos/6311656/pexels-photo-6311656.jpeg" },
    { name: "Kids", img: "https://images.pexels.com/photos/1583395/pexels-photo-1583395.jpeg" },
    { name: "Outerwear", img: "https://images.pexels.com/photos/6311658/pexels-photo-6311658.jpeg" },
    { name: "Jeans", img: "https://images.pexels.com/photos/6311657/pexels-photo-6311657.jpeg" },
    { name: "Shoes", img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg" },
  ];

  return (
    <div className="sale-page">
      <h1 className="sale-title">Sale</h1>

      {/* Category Grid */}
      <div className="sale-category-grid">
        {categories.map((cat) => (
          <div className="sale-category-card" key={cat.name}>
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
