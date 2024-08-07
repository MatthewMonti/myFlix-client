import React, { useState } from 'react';

const SearchBar = ({ filterText, onFilterTextChange }) => {
  const handleChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  return (
    <div>
      <input
        className="searchbar"
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
