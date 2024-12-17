import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './RecipeList.scss';
import { useGetRecipesQuery } from '../redux/recipesApi';

function RecipeList() {
  const { data: recipes, error, isLoading } = useGetRecipesQuery();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filters, setFilters] = useState({
    prepTime: 60,
    difficulty: 'all',
    calories: 700,
    rating: 0
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if(!error && !isLoading) console.log(recipes.recipes)

    const filteredRecipes = recipes.recipes
    .filter(recipe => !selectedCategory || recipe.cuisine === selectedCategory)
    .filter(recipe => recipe.prepTimeMinutes <= filters.prepTime)
    .filter(recipe => filters.difficulty === 'all' || recipe.difficulty === filters.difficulty)
    .filter(recipe => recipe.caloriesPerServing <= filters.calories)
    .filter(recipe => recipe.rating >= filters.rating);


  return (
    <div className="recipe-list-container">
      <Sidebar 
        recipes={recipes.recipes} 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        filters={filters}
        setFilters={setFilters}
      />
      <div className="recipe-list">
        <h1>Recipes {selectedCategory ? `from ${selectedCategory}` : ''}</h1>
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.name} />
              <div className="recipe-info">
                <h2>{recipe.name}</h2>
                <div className="recipe-rating">
                  Rating: {recipe.rating.toFixed(1)} / 5
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeList;

