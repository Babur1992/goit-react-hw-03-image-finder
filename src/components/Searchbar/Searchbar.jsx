import React from 'react';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.searchInput.value;
    onSubmit(inputValue);
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchInput"
        />
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
};
