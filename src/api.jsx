const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchRandomRecipe = async () => {
  const res = await fetch(`${BASE_URL}/random.php`);
  const data = await res.json();
  return data.meals[0];
};

export const fetchRecipeById = async (id) => {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals[0];
};

export const fetchRecipesBySearch = async (keyword) => {
  const res = await fetch(`${BASE_URL}/search.php?s=${keyword}`);
  const data = await res.json();
  return data.meals || [];
};
