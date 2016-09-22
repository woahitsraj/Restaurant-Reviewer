import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlaces } from '../actions/index';

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
      term: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchPlaces(this.state.term);
    this.setState({ term: '' });
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPlaces }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
