// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(searchTerm);
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for images..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
