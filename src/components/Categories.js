import React from "react";

function Categories({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="lmj-plant-list">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="lmj-categories-select"
      >
        <option value="">Toutes</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory("")}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
