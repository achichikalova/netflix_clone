import React, { useEffect } from 'react';
import './SearchBar.css';

const SearchBar = () => {

  useEffect(() => {
    const searchIcon = document.querySelector('.search-icon-wrapper');
    searchIcon.addEventListener('click', e => {
      searchIcon.parentElement.classList.toggle('open')
    })
  }, [])



  return (
    <div className='search-icon'>
      <input className='search-icon-input' type="text" placeholder='Title, genres, people'/>
      <div className="search-icon-wrapper">
        <div className="search-icon-glass"></div>
        <div className="search-icon-handle"></div>
      </div>
    </div>
  );
};

export default SearchBar;
