import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword) onSearch(keyword);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="border px-4 py-2 rounded w-80 border-black"
        type="text"
        placeholder="Search for recipes..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Search</button>
    </form>
  );
};

export default SearchBar;
