import { useEffect, useState } from 'react';
import { fetchRandomRecipe } from '../api';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchCarousel = async () => {
      let items = [];
      for (let i = 0; i < 10; i++) {
        items.push(await fetchRandomRecipe());
      }
      setRecipes(items);
    };
    fetchCarousel();
  }, []);

  return (
    <div className="overflow-x-auto mt-6 whitespace-nowrap py-2">
      <h2 className="text-2xl font-bold mb-2">Explore More Recipes</h2>
      <div className="flex gap-4">
        {recipes.map((recipe) => (
          <Link
            key={recipe.idMeal}
            to={`/recipe/${recipe.idMeal}`}
            className="min-w-[180px] bg-white rounded shadow-md hover:shadow-xl transition"
          >
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="rounded-t w-full h-32 object-cover" />
            <p className="p-2 text-sm font-semibold">{recipe.strMeal}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
