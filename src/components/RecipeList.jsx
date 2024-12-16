import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './RecipeList.scss';
import { useGetRecipesQuery } from '../redux/recipesApi';

function RecipeList() {
  const { data: recipes, error, isLoading } = useGetRecipesQuery();
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if(!error && !isLoading) console.log(recipes.recipes)

  const filteredRecipes = selectedCategory
    ? recipes.recipes.filter(recipe => recipe.cuisine === selectedCategory)
    : recipes.recipes;

  return (
    <div className="recipe-list-container">
      <Sidebar 
        recipes={recipes.recipes} 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="recipe-list">
        <h1>Recipes {selectedCategory ? `from ${selectedCategory}` : ''}</h1>
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.name} />
              <h2>{recipe.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeList;

