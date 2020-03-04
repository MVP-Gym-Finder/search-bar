import React from 'react';
import axios from 'axios';
import SearchResultEntry from './SearchResultEntry.jsx';


export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gyms: [],
      zip: null,
      displayCount: 6,
      userHasSearched: false,
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  loadMoreHandler(e) {
    e.preventDefault();
    this.setState((prevState) => {
      const temp = prevState.displayCount + 6;
      return { displayCount: temp };
    });
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    axios.get(`/api/search/${this.state.zip}`)
      .then((data) => {
        this.setState({
          gyms: data.data,
          userHasSearched: true
        })
      })
      .catch((err) => console.error(err));
    document.getElementById("search-bar").value = '';
  }

  render() {
    return (
      <div className="search-bar">
        <div className="search-prompt-container">
          <h1 className="search-title">Find gyms near you</h1>
          <label className="search-prompt">Enter your zip code:</label>
          <br></br>
          <input type="search" id="search-bar" name="zip" onChange={this.changeHandler}></input>
          <button onClick={this.submitHandler}><span className="glyphicon glyphicon-search"></span></button>
        </div>
        <div>
          {this.state.gyms.map((item, index) => {
            return <SearchResultEntry gym={item} key={index} />
          })}
          { this.state.userHasSearched ? 
            this.state.displayCount > this.state.gyms.length ? 
            <div> <span>No more results</span> </div> :
            <div> <button onClick={this.loadMoreHandler}>More Results</button> </div> : null }
        </div>
      </div>
    );
  }
}