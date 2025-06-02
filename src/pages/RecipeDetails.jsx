import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchRecipeById } from '../api';
import Carousel from '../components/Carousel';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipe = async () => {
      const data = await fetchRecipeById(id);
      setRecipe(data);
    };
    getRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
    }
  }

  return (
    <>
     <div className="p-4">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full  rounded" />
      <h1 className="text-3xl font-bold mt-2">{recipe.strMeal}</h1>
      <p>{recipe.strArea} • {recipe.strCategory}</p>
      <h2 className="text-xl mt-4 font-semibold">Ingredients:</h2>
      <ul className="list-disc pl-6">
        {ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
      </ul>
      <h2 className="text-xl mt-4 font-semibold">Instructions:</h2>
      <p>{recipe.strInstructions}</p>
    </div>
    <Carousel/>
    </>
   
  );
};

export default RecipeDetails;
