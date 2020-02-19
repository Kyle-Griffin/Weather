import React, { useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';

import Search from './components/search';
import WeatherWrapper from './components/weatherWrapper';

import './App.css';

const WeatherApp = () => {

  // We would obfuscate this ID in production.
  const appID = '147c266bddb96d9caf03b62e816f51a3';

  const [weather, setWeather] = useState([]);

  const getWeatherData = async(url) => {
    const fullUrl = url + `&appid=${appID}`;
    console.log(fullUrl);
    const apiData = await fetch(fullUrl, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        'Content-type': 'application/json'
      },
    })
    .catch(error => {
      throw Error;
    })
    .then(response => response.json())
    .then(data => data)
        setWeather({
          data: apiData,
        });
    }
  

  const searchHandler = (event) => {
    event.preventDefault();
    var locationChoice = event.target.locationInput.value;
    // https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY
    if (locationChoice.length > 0) { 
      try {
        getWeatherData(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${locationChoice}`);
      } catch (error) {
        console.error(error);
      }
    } else {
          alert("Please enter a city");
    }
  }

  

  

    return (
      <div className="WeatherApp">
        <WeatherWrapper weather={weather.data} />
        {console.log(weather.data)}
        <Search searchHandler={searchHandler.bind(this)} />
      </div>
    );
}

export default WeatherApp;
