import React from 'react';
import { useParams, Link } from 'react-router-dom';
// import { useGetRecipesQuery } from '../features/recipesApi';
import './RecipeDetail.scss';
import { useGetRecipesQuery } from '../redux/recipesApi';

function RecipeDetail() {
  const { id } = useParams();
  const { data: recipes, error, isLoading } = useGetRecipesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const recipe = recipes.recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="recipe-detail">
      <Link to="/" className="back-link">← Back to Recipes</Link>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>Country: {recipe.cuisine}</p>
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;

