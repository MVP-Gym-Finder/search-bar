import React from 'react';
import SearchResultEntry from './SearchResultEntry.jsx';


export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gyms: [],
    };
  }

  render() {
    return (
      <div>
        <h1>Find gyms near you</h1>
        <div>
          <label>Enter your zip code:
            <input type="search" id="search-bar"></input>
          </label>
          <button><span className="glyphicon glyphicon-search"></span></button>
        </div>
        <div>
          {this.state.gyms.map((items, index) => {
            return <SearchResultEntry gym={item} key={index} />
          })}
        </div>
      </div>
    );
  }
}