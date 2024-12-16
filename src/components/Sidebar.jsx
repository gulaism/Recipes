import React from 'react';
import './Sidebar.scss';

function Sidebar({ recipes, selectedCategory, onSelectCategory }) {
  const countries = [...new Set(recipes.map((recipe) => recipe.cuisine))];

  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        <li 
          className={selectedCategory === null ? 'active' : ''}
          onClick={() => onSelectCategory(null)}
        >
          All Countries
        </li>
        {countries.map((country) => (
          <li 
            key={country}
            className={selectedCategory === country ? 'active' : ''}
            onClick={() => onSelectCategory(country)}
          >
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

