import React, { Component } from 'react';

import NavigationHeader from './navigation-header';
import SearchBar from './search-bar';
class App extends Component {
  render() {
    return (
      <div>
        <NavigationHeader />
        <div className="container">
          <SearchBar />
        </div>
      </div>
      );
  }
}

export default App;
