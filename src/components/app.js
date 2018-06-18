import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import ForecastList from '../containers/ForecastList';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ForecastList />
      </div>

    );
  }
}
