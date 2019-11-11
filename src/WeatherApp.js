import React from 'react';
import Search from './components/search';
import './App.css';

class WeatherApp extends React.Component {
  state = {
    currentLocation: [{
      location: 'test',
      temperature: '',
      status: '',
    }]
  };
  

  searchHandler = (event) => {
    this.setState({
      currentLocation: [{
        location: event.target.locationInput.value
      }]
    });
    event.preventDefault();
}

  render() {
    return (
      <div className="WeatherApp">
        <div className="weather-display"></div>
        <Search searchHandler={this.searchHandler.bind(this)} />
        <p>{this.state.currentLocation[0].location}</p>
      </div>
    );
  }
}

export default WeatherApp;
