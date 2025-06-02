import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => (
  <Link to={`/recipe/${recipe.idMeal}`} className="border p-2 m-5 bg-slate-100 rounded-lg shadow hover:shadow-xl hover:scale-105 transition duration-700 ease-in-out justify-center">
    <h3 className="text-lg mt-2 font-semibold">{recipe.strMeal}</h3>
    <img src={recipe.strMealThumb} alt={recipe.strMeal} className="rounded-2xl p-5" />
  </Link>
);

export default RecipeCard;
