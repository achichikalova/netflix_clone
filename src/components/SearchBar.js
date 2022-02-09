import React, { useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {

  useEffect(() => {
    const searchIcon = document.querySelector('.search-icon-wrapper');
    searchIcon.addEventListener('click', e => {
      searchIcon.parentElement.classList.toggle('open');
      setSearchTerm('');
    })
  }, []);

  return (
    <div className='search-icon'>
      <input 
        className='search-icon-input'
        type="text"
        onChange={e => {setSearchTerm(e.target.value)}}
        placeholder='Title, genres, people'
        value={searchTerm}/>
      <div className="search-icon-wrapper">
        <div className="search-icon-glass"></div>
        <div className="search-icon-handle"></div>
      </div>
    </div>
  );
};

export default SearchBar;
