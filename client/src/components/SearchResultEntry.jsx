import React from 'react';

const SearchResultEntry = (props) => {
  return (
    <div>
      <div>
        <h2>{props.gym.name}</h2>
      </div>
    </div>
  );
};

export default SearchResultEntry;