import React, { useState } from "react";
import "./Sidebar.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Sidebar({
  recipes,
  selectedCategory,
  onSelectCategory,
  filters,
  setFilters,
}) {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const countries = [];
  recipes.forEach((recipe) => {
    if (!countries.includes(recipe.cuisine)) {
      countries.push(recipe.cuisine);
    }
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: name === "difficulty" ? value : Number(value),
    }));
  };

  const handleCategoryToggle = () => {
    setIsOpenCategory(!isOpenCategory);
  }

  return (
    <div className="sidebar">
      <div className="category-section">
        <div className="h2">Categories</div>
        <div className="icons" onClick={handleCategoryToggle}>{isOpenCategory ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24}/>}</div>
      </div>
      {isOpenCategory && (
        <ul>
          <li
            className={selectedCategory === null ? "active" : ""}
            onClick={() => onSelectCategory(null)}
          >
            All Countries
          </li>
          {countries.map((country, index) => (
            <li
              key={index}
              className={selectedCategory === country ? "active" : ""}
              onClick={() => onSelectCategory(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      )}

      <h2>Filters</h2>
      <div className="filter-section">
        <label>
          Prep Time (max minutes):
          <input
            type="range"
            name="prepTime"
            min="0"
            max="60"
            value={filters.prepTime}
            onChange={handleFilterChange}
          />
          <span>{filters.prepTime} min</span>
        </label>

        <label>
          Difficulty:
          <select
            name="difficulty"
            value={filters.difficulty}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
          </select>
        </label>

        <label>
          Calories (max per serving):
          <input
            type="range"
            name="calories"
            min="0"
            max="700"
            value={filters.calories}
            onChange={handleFilterChange}
          />
          <span>{filters.calories} cal</span>
        </label>

        <label>
          Minimum Rating:
          <input
            type="range"
            name="rating"
            min="0"
            max="5"
            step="0.1"
            value={filters.rating}
            onChange={handleFilterChange}
          />
          <span>{filters.rating.toFixed(1)}</span>
        </label>
      </div>
    </div>
  );
}

export default Sidebar;
