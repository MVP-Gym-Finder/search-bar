import React from 'react';

const SearchResultEntry = (props) => {
  return (
    <div className="search-result-container">
      <div className="search-result-left">
        <div>
          <h2 className="search-entry-name">{props.gym.name}</h2>
          <span>{props.gym.address}, {props.gym.city}</span>
        </div>
      </div>
      <div className="search-result-right">
        <div className="search-result-rating">
          {props.gym.rating.toFixed(1)}
        </div>
        <div className="search-result-stars-container">
          <span className="search-result-stars-display"><span style={{ width: `${props.gym.rating * 20}%`}} /></span>
        </div>
      </div>
    </div>
  );
};

export default SearchResultEntry;