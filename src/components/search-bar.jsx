import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(event) {
    this.setState({
      term: event.traget.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault();
    
  }

  render() {
    return (
      <form className="col m12" onSubmit={this.onFormSubmit}>
        <label> Search
          <input
            placeholder="Search for a Restaurant"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </label>
        <span className="input-group-btn">
          <button type="submit" className="waves-effect waves-light btn">
            Submit
          </button>
        </span>
      </form>
      );
  }
}



export default SearchBar;
