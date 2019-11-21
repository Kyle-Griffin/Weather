import React from 'react';
import Search from './components/search';
import './App.css';

class WeatherApp extends React.Component {
  state = {
    appID: '147c266bddb96d9caf03b62e816f51a3',
    currentLocation: [{
      location: 'test',
      temperature: '',
      status: '',
    }]
  };
  

  searchHandler = (event) => {
    event.preventDefault();
    var locationChoice = event.target.locationInput.value;
    // https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY
    if (locationChoice.length > 0) { 
      try {
        const weatherData = getWeatherData('https://api.openweathermap.org/data/2.5/weather?q=', { location: locationChoice});
        console.log(JSON.stringify(weatherData)); // JSON-string from `response.json()` call
        this.setState({
          currentLocation: [{
            location: weatherData
          }]
        }); 
      } catch (error) {
        console.error(error);
      }
    } else {
      this.setState({
        currentLocation: [{
          location: "Please select a city" 
        }]
      });
    }

    async function getWeatherData(url = '', location = {}) {
      const fullUrl = url + location.location + '&appid=147c266bddb96d9caf03b62e816f51a3';
      const response = await fetch(fullUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(location)
      });
      return await response.json();
    }
  }

  

  render() {
    return (
      <div className="WeatherApp">
        <div className="weather-display">
          <p>{this.state.currentLocation[0].location}</p>
        </div>
        <Search searchHandler={this.searchHandler.bind(this)} />
      </div>
    );
  }
}

export default WeatherApp;
