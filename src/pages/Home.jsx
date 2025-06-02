import { useEffect, useState } from 'react';
import { fetchRandomRecipe, fetchRecipesBySearch } from '../api';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      let all = [];
      for (let i = 0; i < 5; i++) {
        all.push(await fetchRandomRecipe());
      }
      setRecipes(all);
    };
    getRecipes();
  }, []);

  const handleSearch = async (keyword) => {
    const results = await fetchRecipesBySearch(keyword);
    setSearchResults(results);
  };

  return (
    <>
     <div className="p-6 bg-slate-50 bg-[url('/img3.jpg')]">
      <SearchBar onSearch={handleSearch} />
      <h2 className="text-3xl font-extrabold text-blue-700 mt-4">Food Recipes</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-2">
        {(searchResults.length > 0 ? searchResults : recipes).map((r) => (
          <RecipeCard key={r.idMeal} recipe={r} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default Home;
